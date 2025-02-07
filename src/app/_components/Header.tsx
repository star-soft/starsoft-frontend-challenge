import Image from "next/image";

import { ShoppingBag } from "lucide-react";

import { CartDrawer } from "./CartDrawer";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-screen z-10 fixed grid grid-cols-2 py-4 px-12 border-b-2 border-quaternaryC backdrop-blur-sm bg-opacity-40">
      <Link href={`/`}>
        <Image src={"/logo.svg"} width={100} height={50} alt="logo" />
      </Link>
      <div className="">
        <CartDrawer>
          <div className="flex justify-end items-center h-full">
            <ShoppingBag className="text-primaryC mr-2" />
            <div>0</div>
          </div>
        </CartDrawer>
      </div>
    </div>
  );
};
