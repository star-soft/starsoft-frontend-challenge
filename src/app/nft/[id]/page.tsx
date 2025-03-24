"use client";
import { Button } from "@/components/ui/button";
import { productRepo } from "@/repositories/productRepo";
import { addToCart } from "@/slices/cartSlice";
import { Product } from "@/types/Product";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { id } = await params;
        console.log(id);

        const { products } = await productRepo.getProducts(1, 50);
        const product = products.find((prod) => prod.id.toString() === id);

        if (!product) {
          throw new Error("Produto não encontrado!");
        }

        setProduct(product);
      } catch (error: any) {
        console.error("Erro ao buscar dados do produto:", error);
        setError(error.message || "Ocorreu um erro ao carregar o produto.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [params]);

  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (error) {
    return <p className="text-center text-white">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-white">Produto não encontrado!</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <PageTransition>
      <div className="flex flex-col md:flex-row items-center gap-8 p-4">
        <Image
          priority
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="text-white grid gap-4 max-w-lg">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg">{product.description}</p>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Image src="/eth.svg" alt="Ethereum" width={29} height={29} />
            <p>
              {product.price} <span>ETH</span>
            </p>
          </div>
          <Button className="bg-primary mt-4 w-full" onClick={handleAddToCart}>
            Comprar
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductPage;
