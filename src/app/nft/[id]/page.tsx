"use client";
import { Button } from "@/components/ui/button";
import { productRepo } from "@/repositories/productRepo";
import {
  addToCart,
  addQuantity,
  removeQuantity,
  removeFromCart,
} from "@/slices/cartSlice";
import { Product } from "@/types/Product";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import { useParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{ id: string }>();

  const { items: cartItems } = useSelector(
    (state: {
      cart: {
        items: {
          id: string;
          image: string;
          name: string;
          description: string;
          price: number;
          quantity: number;
        }[];
        total: number;
        isOpen: boolean;
      };
    }) => state.cart,
  );

  const productInCart = cartItems.find(
    (item) => Number(item.id) === Number(product?.id),
  );
  const quantityInCart = productInCart ? productInCart.quantity : 0;
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({
    [params.id]: false,
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        if (!params.id) {
          throw new Error("ID do produto não encontrado!");
        }

        const { products } = await productRepo.getProducts(1, 50);
        const product = products.find(
          (prod) => prod.id.toString() === params.id,
        );

        if (!product) {
          throw new Error("Produto não encontrado!");
        }

        setProduct(product);
      } catch (error) {
        console.error("Erro ao buscar dados do produto:", error);
        if (error instanceof Error) {
          setError(error.message || "Ocorreu um erro ao carregar o produto.");
        } else {
          setError("Ocorreu um erro ao carregar o produto.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [params.id]);

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
    dispatch(addToCart({ ...product }));
  };
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(Number(id)));
  };
  const updateQuantity = (type: "add" | "remove") => {
    if (product?.id) {
      if (type === "add") {
        dispatch(addQuantity(Number(product.id)));
      } else {
        dispatch(removeQuantity(Number(product.id)));
      }
    }
  };
  const handleImageLoad = () => {
    setTimeout(() => {
      setImageLoaded((prev) => ({
        ...prev,
        [product.id]: true,
      }));
    }, 200); // Delay para evitar que o Skeleton e a imagem apareçam juntos
  };

  return (
    <PageTransition>
      <div className="flex flex-col xl:flex-row items-center gap-8 p-4">
        <div className="relative">
          {!imageLoaded[product.id] && (
            <Skeleton className="absolute top-0 left-0 w-full h-full" />
          )}
          <Image
            priority={true}
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg"
            onLoad={handleImageLoad}
          />
        </div>
        <div className="text-white grid gap-4 w-full max-w-[512px]">
          <h1 className="text-2xl xl:text-4xl font-bold">{product.name}</h1>
          <p className="text-md xl:text-lg">{product.description}</p>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Image src="/eth.svg" alt="Ethereum" width={29} height={29} />
            <p>
              {product.price} <span>ETH</span>
            </p>
          </div>

          {quantityInCart > 0 ? (
            <div className="flex gap-8">
              <div className="grid grid-cols-3 text-center items-center gap-2 bg-foreground rounded-lg w-full max-w-[200px]">
                <Button
                  className="bg-primary w-8 h-8"
                  onClick={() => updateQuantity("remove")}
                >
                  -
                </Button>
                <p className="text-lg">{quantityInCart}</p>
                <Button
                  className="bg-primary w-8 h-8 justify-self-end"
                  onClick={() => updateQuantity("add")}
                >
                  +
                </Button>
              </div>
              <div
                onClick={() => handleRemoveItem(product.id.toString())}
                className="bg-primary hover:bg-primary/80 rounded-full my-auto place-self-center p-2 cursor-pointer tansition-all duration-300 self-end w-full max-w-[44px] text-center"
              >
                <Image src="/delete.svg" alt="Delete" width={27} height={26} />
              </div>
            </div>
          ) : (
            <Button
              className="bg-primary mt-4 w-full"
              onClick={handleAddToCart}
            >
              Comprar
            </Button>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProductPage;
