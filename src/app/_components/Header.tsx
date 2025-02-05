import { ShoppingBag } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-screen z-10 fixed grid grid-cols-2 py-4 px-12 border-b-2 border-quaternaryC backdrop-blur-sm bg-opacity-40">
      <Image src={"/Logo.svg"} width={100} height={50} alt="logo"/>
      <div className="flex justify-end items-center h-full">
        <ShoppingBag className="text-primaryC mr-2" />
        <div>0</div>
      </div>
    </div>
  );
};
