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

const ITEMS_PER_PAGE = 8; // Número de itens por carregamento

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
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (initialProducts.length > 0 && initialMetadata) {
      // Define os produtos iniciais no estado global
      dispatch(
        setProducts({
          products: initialProducts,
          metadata: initialMetadata,
        }),
      );

      // Exibe apenas os primeiros 8 itens localmente
      setVisibleProducts(initialProducts.slice(0, ITEMS_PER_PAGE));
    }
  }, [initialProducts, initialMetadata, dispatch]);

  useEffect(() => {
    if (data) {
      // Adiciona mais produtos ao estado global e exibe os próximos itens localmente
      dispatch(
        addProducts({
          products: data.products,
          metadata: data.metadata,
        }),
      );

      // Adiciona os novos itens ao estado visível
      setVisibleProducts((prevVisible) => {
        const allProducts = [
          ...prevVisible,
          ...products.slice(visibleProducts.length, products.length),
          ...data.products.slice(0, ITEMS_PER_PAGE),
        ];

        return allProducts.filter(
          (product, index, self) =>
            index === self.findIndex((item) => item.id === product.id),
        );
      });
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
  if (error) return <p>Error loading products</p>;

  const progressValue = Math.min(
    (visibleProducts.length / (metadata?.count || 1)) * 100,
    100,
  );

  return (
    <div className="text-white">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.length > 0 ? (
          visibleProducts.map((product: Product) => (
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

      <p>Total de produtos: {metadata?.count || 0}</p>

      <p>Itens exibidos na tela: {visibleProducts.length}</p>
    </div>
  );
};

export default ProductList;
