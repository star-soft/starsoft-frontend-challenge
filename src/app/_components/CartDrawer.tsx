import { JSX, useState, useEffect } from "react";
import Image from "next/image";
import { MoveLeft, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NumberPicker } from "@/components/number-picker";
import { TooltipInfo } from "@/components/tooltip-info";

interface Props {
  children: JSX.Element;
}

const ItemCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [quantities, setQuantities] = useState<number[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("purchasedItems");
    if (savedItems) {
      const items = JSON.parse(savedItems);
      setCartItems(items);
      setQuantities(new Array(items.length).fill(1));  
    }
  }, []);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);
  };

  const removeItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    const updatedQuantities = quantities.filter((_, i) => i !== index);

    setCartItems(updatedItems);
    setQuantities(updatedQuantities);
    localStorage.setItem("purchasedItems", JSON.stringify(updatedItems));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item, index) => {
      const quantity = quantities[index];
      return total + item.price * quantity;
    }, 0);
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg grid grid-cols-3 gap-2 bg-quaternaryC hover:bg-quaternaryC/90 mb-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.image}
                width={200}
                height={100}
                alt="Item Image"
                className="scale-110 transition-all duration-300"
              />
            </div>
            <div className="col-span-2">
              <div className="mb-1">{item.title}</div>
              <TooltipInfo data={item.description}>
                <div className="text-xs text-ellipsis font-extralight overflow-hidden whitespace-nowrap max-w-[25ch]">
                  {item.description}
                </div>
              </TooltipInfo>
              <div className="mt-1 mb-1 flex items-center gap-1">
                <Image
                  src={"/Ellipse.png"}
                  width={20}
                  height={23}
                  alt="ETH Icon"
                />
                <div className="text-md">{item.price} ETH</div>
              </div>
              <div className="flex justify-between">
                <NumberPicker
                  value={quantities[index]}
                  onChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                />
                <Button
                  className="w-fit h-fit p-2 rounded-full"
                  onClick={() => removeItem(index)}
                >
                  <Trash />
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="my-12">
          <p>Seu carrinho está vazio.</p>
        </div>
      )}
      
      <div className="my-12">
        <div className="flex justify-between">
          <div className="font-bold">TOTAL</div>
          <div className="mt-1 mb-1 flex items-center gap-1">
            <Image
              src={"/Ellipse.png"}
              width={20}
              height={23}
              alt="ETH Icon"
            />
            <div className="text-md font-semibold">{calculateTotal()} ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CartDrawer({ children }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"none"} size={"none"} className="flex justify-end">
          {children}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-secondaryC p-4">
        <DrawerTitle></DrawerTitle>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex gap-4 items-center mb-8">
            <DrawerClose className="w-fit h-fit p-4" asChild>
              <Button variant={"icon"}>
                <MoveLeft />
              </Button>
            </DrawerClose>
            <DrawerDescription>Mochila de Compras</DrawerDescription>
          </DrawerHeader>
          <ItemCart />
          <DrawerFooter className="p-0">
            <Button>FINALIZAR COMPRA</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
