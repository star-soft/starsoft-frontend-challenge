import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";

import { CartDrawer } from "./cart-drawer";

export const Header = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const items = localStorage.getItem("purchasedItems");
    const quantities = localStorage.getItem("itemQuantities");

    if (items && quantities) {
      const parsedItems = JSON.parse(items);
      const parsedQuantities = JSON.parse(quantities);

      let totalItems = 0;

      parsedItems.forEach((item : any, index : any) => {
        const quantity = parsedQuantities[index] || 1;
        totalItems += quantity;
      });

      setItemCount(totalItems);
    }
  }, []);

  return (
    <div className="w-screen z-10 fixed grid grid-cols-2 py-4 px-12 border-b-2 border-quaternaryC backdrop-blur-sm bg-opacity-40">
      <Link href={`/`}>
        <Image src={"/logo.svg"} width={100} height={50} alt="logo" />
      </Link>
      <div className="">
        <CartDrawer>
          <div className="flex justify-end items-center h-full">
            <ShoppingBag className="text-primaryC mr-2" />
            <div>{itemCount}</div>
          </div>
        </CartDrawer>
      </div>
    </div>
  );
};
