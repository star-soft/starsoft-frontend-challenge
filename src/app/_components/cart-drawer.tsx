import { JSX, useState } from "react";

import { MoveLeft } from "lucide-react";

import { ItemCart } from "./item-cart";

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

interface Props {
  children: JSX.Element;
}

export function CartDrawer({ children }: Props) {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleFinalizePurchase = () => {
    setIsPurchased(true);
    localStorage.removeItem("purchasedItems");
  };

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
          {isPurchased ? (
            <div className="my-12">
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            <ItemCart />
          )}
          <DrawerFooter className="p-0">
            {isPurchased ? (
              <Button disabled>COMPRA FINALIZADA</Button>
            ) : (
              <Button onClick={handleFinalizePurchase}>FINALIZAR COMPRA</Button>
            )}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
