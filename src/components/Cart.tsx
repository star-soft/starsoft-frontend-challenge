import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeQuantity,
  addQuantity,
  toggleCart,
  clearCart,
} from "@/slices/cartSlice";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import CheckoutTransition from "./CheckoutTransition";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useDispatch();
  const [isPay, setIsPay] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const {
    items: cartItems,
    total,
    isOpen,
  } = useSelector(
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
  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(Number(id)));
  };
  const handleRemoveQuantity = (id: string) => {
    dispatch(removeQuantity(Number(id)));
  };
  const handleAddQuantity = (id: string) => {
    dispatch(addQuantity(Number(id)));
  };
  const handlePay = () => {
    setIsPay(true);
    setIsAnimating(true);
  };
  const handleAnimationEnd = () => {
    setIsAnimating(false);
    setIsPay(false);
    dispatch(clearCart());
    dispatch(toggleCart(false));
    toast.success("Compra realizada com sucesso", {
      style: { color: "green" },
      duration: 2000,
    });
  };
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={(open) => dispatch(toggleCart(open))}>
        <SheetTrigger
          name="menu"
          className="cursor-pointer hover:bg-foreground transition-all duration-300 p-2 rounded-full"
        >
          <div className="relative">
            {cartItems.length > 0 && (
              <span className="absolute bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center -right-3">
                {cartItems.length}
              </span>
            )}
            <Image src="/bag.svg" alt="Bag" width={33} height={34} />
          </div>
        </SheetTrigger>

        <SheetContent
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          role="dialog"
          className="text-white overflow-hidden"
        >
          <SheetHeader>
            <SheetTitle className="text-white text-lg xl:text-2xl font-bold">
              Mochila de compras
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-4 mt-4 p-4 overflow-y-auto">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-secondary p-4 rounded-lg"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      priority
                      src={item.image}
                      alt={item.name}
                      width={161}
                      height={161}
                      className="rounded"
                    />
                    <div>
                      <div className="grid grid-cols-1 gap-2">
                        <p className="font-bold text-lg">{item.name}</p>
                        <p className="text-sm line-clamp-1">
                          {item.description}
                        </p>

                        <p className="text-lg font-medium class flex items-center gap-2 mt-2 mb-2">
                          <span>
                            <Image
                              src="/eth.svg"
                              alt="Ethereum"
                              width={29}
                              height={29}
                              className="inline-block"
                            />
                          </span>
                          {item.price} ETH
                        </p>
                        <div className="grid grid-cols-3 text-center items-center gap-2 bg-background p-1 rounded-lg w-full max-w-[90px] xl:w-max">
                          <Button
                            onClick={() => handleRemoveQuantity(item.id)}
                            className="bg-transparent"
                            size="sm"
                          >
                            -
                          </Button>
                          <p className="text-sm">{item.quantity}</p>

                          <Button
                            onClick={() => handleAddQuantity(item.id)}
                            className="bg-transparent text-left"
                            size="sm"
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-primary hover:bg-primary/80 rounded-full p-2 cursor-pointer tansition-all duration-300 self-end w-full max-w-[44px] text-center"
                  >
                    <Image
                      src="/delete.svg"
                      alt="Delete"
                      width={27}
                      height={26}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-lg">Seu carrinho está vazio!</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-6 border-t border-white/10 p-4">
              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p className="flex gap-2">
                  <span>
                    <Image
                      src="/eth.svg"
                      alt="Ethereum"
                      width={29}
                      height={29}
                      className="inline-block"
                    />
                  </span>
                  {total} ETH
                </p>
              </div>
              <Button
                className="w-full h-16 mt-4 bg-primary"
                onClick={() => handlePay()}
              >
                Finalizar Compra
              </Button>
            </div>
          )}
          {isPay && isAnimating && (
            <CheckoutTransition onAnimationEnd={handleAnimationEnd} />
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
