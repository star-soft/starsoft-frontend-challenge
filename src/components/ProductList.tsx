"use client";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, addProducts, setPage } from "@/slices/productsSlice";
import { Product } from "@/types/Product";
import { useProducts } from "@/hooks/useProducts";
import { ProductMetadata } from "@/types/ProductMetadata";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { CardProduct } from "./CardProduct";
import CardSkeleton from "./skeleton/CardSkeleton";
import Image from "next/image";

interface ProductListProps {
  initialProducts?: Product[];
  initialMetadata?: ProductMetadata;
}

const ITEMS_PER_PAGE = 8;

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
  const [showArrow, setShowArrow] = useState(false);
  const productListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (initialProducts.length > 0 && initialMetadata) {
      dispatch(
        setProducts({
          products: initialProducts,
          metadata: initialMetadata,
        }),
      );
      setVisibleProducts(initialProducts.slice(0, ITEMS_PER_PAGE));
    }
  }, [initialProducts, initialMetadata, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(
        addProducts({
          products: data.products,
          metadata: data.metadata,
        }),
      );

      setVisibleProducts((prevVisible) => {
        const combinedProducts = [
          ...prevVisible,
          ...products.slice(prevVisible.length),
          ...data.products,
        ];

        return combinedProducts.filter(
          (product, index, self) =>
            index === self.findIndex((item) => item.id === product.id),
        );
      });
      setIsButtonLoading(false);
    }
  }, [data, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (productListRef.current) {
        const scrollLeft = productListRef.current.scrollLeft;
        const scrollWidth = productListRef.current.scrollWidth;
        const clientWidth = productListRef.current.clientWidth;

        if (
          scrollLeft + clientWidth >= scrollWidth - 10 &&
          metadata?.hasNextPage
        ) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };

    if (productListRef.current) {
      productListRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (productListRef.current) {
        productListRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [metadata]);
  useEffect(() => {
    if (visibleProducts.length > 10 && productListRef.current) {
      const container = productListRef.current;
      const totalWidth = container.scrollWidth;
      const containerWidth = container.clientWidth;
      const productWidth = 230 * 10;

      if (totalWidth > containerWidth) {
        let scrollPosition = totalWidth - containerWidth - productWidth;
        if (
          visibleProducts.length > Math.floor(containerWidth / productWidth)
        ) {
          scrollPosition = totalWidth - containerWidth - productWidth;
          console.log("1");
        } else {
          console.log("2");

          scrollPosition = totalWidth - containerWidth - productWidth;
        }
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [visibleProducts]);
  const handleLoadMore = () => {
    if (metadata?.hasNextPage && !isButtonLoading) {
      setIsButtonLoading(true);
      dispatch(setPage(page + 1));
    }
  };

  const handleLoadMoreMobile = () => {
    if (metadata?.hasNextPage && !isButtonLoading) {
      setIsButtonLoading(true);
      dispatch(setPage(page + 1));
    }
  };

  const scrollToStart = () => {
    if (productListRef.current) {
      if (isButtonLoading) {
        productListRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  if (isLoading && products.length === 0)
    return (
      <ul
        ref={productListRef}
        className="flex overflow-auto md:overflow-visible h-[460px] md:h-auto gap-4 md:grid xl:grid-cols-1 xl:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
      >
        {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
          <li key={index}>
            <CardSkeleton />
          </li>
        ))}
      </ul>
    );
  if (error) return <p>Erro ao carregar produtos</p>;

  const progressValue = Math.min(
    (visibleProducts.length / (metadata?.count || 1)) * 100,
    100,
  );

  return (
    <div className="text-white">
      <ul
        ref={productListRef}
        className="flex overflow-auto md:overflow-visible h-[460px] md:h-auto gap-4 md:grid xl:grid-cols-1 xl:gap-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
      >
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
          className="w-full mt-4 p-4 hidden md:block"
          size={"lg"}
        >
          {isButtonLoading
            ? "Carregando..."
            : metadata?.hasNextPage
              ? "Ver mais"
              : "Você já viu tudo"}
        </Button>

        {showArrow && (
          <Button
            onClick={() => {
              scrollToStart();
              handleLoadMoreMobile();
            }}
            disabled={!metadata?.hasNextPage || isButtonLoading}
            className="absolute right-0 top-60 mt-4 p-4 md:hidden block"
            size={"lg"}
          >
            <Image
              src="/arrow.svg"
              alt="Arrow down"
              width={24}
              height={24}
              className="rotate-180"
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
