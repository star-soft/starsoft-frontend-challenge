import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  removeQuantity,
  addQuantity,
  toggleCart,
} from "@/slices/cartSlice";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

const Cart = () => {
  const dispatch = useDispatch();

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
  ); // Busca os itens e o total do carrinho

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(Number(id))); // Remove um item do carrinho pelo ID
  };
  const handleRemoveQuantity = (id: string) => {
    dispatch(removeQuantity(Number(id))); // Remove uma unidade do item do carrinho pelo ID
  };
  const handleAddQuantity = (id: string) => {
    dispatch(addQuantity(Number(id))); // Remove uma unidade do item do carrinho pelo ID
  };
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={(open) => dispatch(toggleCart(open))}>
        <SheetTrigger
          name="menu"
          className="cursor-pointer hover:bg-foreground transition-all duration-300 p-2 rounded-full"
        >
          <Image src="/bag.svg" alt="Bag" width={33} height={34} />
        </SheetTrigger>

        <SheetContent
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          role="dialog"
          className="text-white"
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
                      <p className="font-bold text-lg">{item.name}</p>
                      <p className="text-sm line-clamp-1">{item.description}</p>

                      <p className="text-lg font-medium class flex items-center gap-2 mt-2 mb-2">
                        <span>
                          <Image
                            src="/eth.svg"
                            alt="Ethereum"
                            width={20}
                            height={20}
                            className="inline-block"
                          />
                        </span>
                        {item.price} ETH
                      </p>
                      <div className="flex items-center gap-4 bg-background p-2 rounded-lg w-max">
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
                          className="bg-transparent"
                          size="sm"
                        >
                          +
                        </Button>
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

          {/* Total do carrinho */}
          {cartItems.length > 0 && (
            <div className="mt-6 border-t border-white/10 p-4">
              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p className="flex gap-2">
                  <span>
                    <Image
                      src="/eth.svg"
                      alt="Ethereum"
                      width={20}
                      height={20}
                      className="inline-block"
                    />
                  </span>
                  {total} ETH
                </p>
              </div>
              <Button className="w-full mt-4 bg-primary">
                Finalizar Compra
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
