"use client";

import { JSX } from "react";

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
  const description = "Uma mochila resistente com compartimentos secretos, ideal para aventureiros que precisam carregar uma variedade de itens essenciais em suas jornadas épicas."
  return (
    <div>
      <div className="p-4 rounded-lg grid grid-cols-3 gap-2 bg-quaternaryC hover:bg-quaternaryC/90">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={"https://softstar.s3.amazonaws.com/items/backpack.png"}
            width={200}
            height={100}
            alt="NFT picture"
            className="scale-110 transition-all duration-300"
          />
        </div>
        <div className="col-span-2">
          <div className="mb-1">Backpack</div>
          <TooltipInfo data={description}>
          <div className="text-xs text-ellipsis font-extralight overflow-hidden whitespace-nowrap max-w-[25ch]">
            {description}
          </div>
          </TooltipInfo>
          <div className="mt-1 mb-1 flex items-center gap-1">
            <Image src={"/Ellipse.png"} width={20} height={23} alt="ETH Icon" />
            <div className="text-md">332 ETH</div>
          </div>
          <div className="flex justify-between">
          <NumberPicker />
          <Button className="w-fit h-fit p-2 rounded-full">
            <Trash/>
          </Button>
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
          <DrawerFooter className="p-0 mt-4">
            <Button>FINALIZAR COMPRA</Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
