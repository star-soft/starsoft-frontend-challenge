import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  addToCart,
  removeFromCart,
  removeQuantity,
} from "@/slices/cartSlice";
import PageTransition from "./PageTransition";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonCardTransition from "./ButtonCardTransition";
import { Skeleton } from "./ui/skeleton";

const CardProduct = ({
  product,
  openCart,
}: {
  product: Product;
  openCart: () => void;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  // Inicializando o estado para o carregamento de imagens
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({
    [product.id]: false,
  });

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
    (item) => Number(item.id) === Number(product.id),
  );
  const quantityInCart = productInCart ? productInCart.quantity : 0;

  const prefetchProductPage = () => {
    router.prefetch(`/nft/${product.id}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    openCart();
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(Number(id)));
  };

  const updateQuantity = (id: string, type: "add" | "remove") => {
    if (type === "add") {
      dispatch(addQuantity(Number(id)));
    } else {
      dispatch(removeQuantity(Number(id)));
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
      <Card
        className="h-full max-w-[289px] xl:max-w-[360px] m-auto xl:max-h-[555px] w-full bg-foreground border-0 text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <Link href={`/nft/${product.id}`} onMouseEnter={prefetchProductPage}>
            <div className="relative">
              {!imageLoaded[product.id] && (
                <Skeleton className="absolute top-0 left-0 w-full h-full" />
              )}
              <Image
                className={`rounded-lg transition-opacity duration-500 object-contain ${
                  imageLoaded[product.id] ? "opacity-100" : "opacity-0"
                }`}
                priority={true}
                src={product.image}
                alt={product.name}
                width={290}
                height={290}
                onLoad={handleImageLoad}
              />
            </div>
          </Link>
        </CardHeader>
        <CardContent className="w-[249px] lg:w-[289px]">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <CardDescription className="line-clamp-1">
            {product.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="grid gap-2">
          <div className="text-xl font-bold flex items-center gap-2 mb-2">
            <Image src="eth.svg" alt="Ethereum" width={29} height={29} />
            <p className="text-lg">
              {product.price} <span>ETH</span>
            </p>
          </div>
          {productInCart ? (
            isHovered ? (
              <ButtonCardTransition>
                <div className="h-15 flex justify-between items-center gap-8">
                  <div className="grid grid-cols-3 text-center items-center gap-2 bg-background rounded-lg w-full ">
                    <Button
                      className="bg-primary w-8 h-8 justify-self-start border border-primary"
                      onClick={() =>
                        updateQuantity(product.id.toString(), "remove")
                      }
                    >
                      -
                    </Button>
                    <p className="text-lg">{quantityInCart}</p>
                    <Button
                      className="bg-primary w-8 h-8 justify-self-end border border-primary"
                      onClick={() =>
                        updateQuantity(product.id.toString(), "add")
                      }
                    >
                      +
                    </Button>
                  </div>
                  <div
                    onClick={() => handleRemoveItem(product.id.toString())}
                    className="bg-primary hover:bg-primary/80 rounded-full my-auto place-self-center p-2 cursor-pointer tansition-all duration-300 self-end w-full max-w-[44px] text-center"
                  >
                    <Image
                      src="/delete.svg"
                      alt="Delete"
                      width={27}
                      height={26}
                    />
                  </div>
                </div>
              </ButtonCardTransition>
            ) : (
              <Button
                className="w-full bg-primary"
                size={"card"}
                onClick={handleAddToCart}
                disabled
              >
                Produto adicionado
              </Button>
            )
          ) : (
            <Button
              className="w-full bg-primary"
              size={"card"}
              onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </CardFooter>
      </Card>
    </PageTransition>
  );
};

export { CardProduct };
