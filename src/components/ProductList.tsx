"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, addProducts, setPage } from "@/slices/productsSlice";
import { Product } from "@/types/Product";
import { useProducts } from "@/hooks/useProducts";
import { ProductMetadata } from "@/types/ProductMetadata";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { CardProduct } from "./CardProduct";
import CardSkeleton from "./skeleton/CardSkeleton";

interface ProductListProps {
  initialProducts?: Product[];
  initialMetadata?: ProductMetadata;
}

const ITEMS_PER_PAGE = 8; // Número de itens no primeiro carregamento

const ProductList = ({
  initialProducts = [],
  initialMetadata,
}: ProductListProps) => {
  const dispatch = useDispatch();
  const { products, page, metadata } = useSelector(
    (state: {
      products: {
        products: Product[];
        page: number;
        metadata: ProductMetadata;
      };
    }) => state.products,
  );

  const { data, isLoading, error } = useProducts(page);

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  useEffect(() => {
    if (initialProducts.length > 0 && initialMetadata) {
      // Define os produtos iniciais no estado global
      dispatch(
        setProducts({
          products: initialProducts,
          metadata: initialMetadata,
        }),
      );
    }
  }, [initialProducts, initialMetadata, dispatch]);

  useEffect(() => {
    if (data) {
      // Adiciona mais produtos ao estado global
      dispatch(
        addProducts({
          products: data.products,
          metadata: data.metadata,
        }),
      );
      setIsButtonLoading(false);
    }
  }, [data, dispatch]);

  const handleLoadMore = () => {
    if (metadata?.hasNextPage && !isButtonLoading) {
      setIsButtonLoading(true);
      dispatch(setPage(page + 1));
    }
  };

  if (isLoading && products.length === 0)
    return (
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
          <li key={index}>
            <CardSkeleton />
          </li>
        ))}
      </ul>
    );

  if (error) return <p>Erro ao carregar os produtos.</p>;

  const progressValue = Math.min(
    (products.length / (metadata?.count || 1)) * 100,
    100,
  );

  return (
    <div className="text-white">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.length > 0 ? (
          products.slice(0, ITEMS_PER_PAGE * page).map((product: Product) => (
            <li key={product.id}>
              <CardProduct product={product} openCart={() => {}} />
            </li>
          ))
        ) : (
          <p>Não existem produtos disponíveis.</p>
        )}
      </ul>

      <div className="mt-8 w-full max-w-[400px] m-auto">
        <Progress
          value={progressValue}
          max={100}
          aria-label="Loading progress"
        />

        <Button
          onClick={handleLoadMore}
          disabled={!metadata?.hasNextPage || isButtonLoading}
          className="w-full mt-4 p-4"
          size={"lg"}
        >
          {isButtonLoading
            ? "Carregando..."
            : metadata?.hasNextPage
              ? "Ver mais"
              : "Você já viu tudo"}
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
