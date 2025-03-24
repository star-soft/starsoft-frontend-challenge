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
import { useDispatch } from "react-redux";
import { addToCart } from "@/slices/cartSlice";
import PageTransition from "./PageTransition";
import { useRouter } from "next/navigation";

const CardProduct = ({
  product,
  openCart,
}: {
  product: Product;
  openCart: () => void;
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const prefetchProductPage = () => {
    router.prefetch(`/nft/${product.id}`);
    console.log("Prefetching product page", product.id);
  };
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    openCart();
  };

  return (
    <PageTransition>
      <Card className="h-full max-w-[289px] xl:max-w-[360px] m-auto xl:max-h-[555px] w-full bg-foreground border-0 text-white">
        <CardHeader>
          <Link href={`/nft/${product.id}`} onMouseEnter={prefetchProductPage}>
            <Image
              className="rounded-lg"
              priority
              src={product.image}
              alt={product.name}
              width={289}
              height={258}
            />
          </Link>
        </CardHeader>
        <CardContent>
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
          <Button
            className="bg-primary w-full"
            size={"card"}
            onClick={handleAddToCart}
          >
            Adicionar ao Carrinho
          </Button>
        </CardFooter>
      </Card>
    </PageTransition>
  );
};

export { CardProduct };
