import { ShoppingBag } from "lucide-react";

export const Header = () => {
  return (
    <div className="w-screen fixed grid grid-cols-2 py-6 px-12 border-b-2 border-quaternaryC backdrop-blur-sm bg-opacity-40">
      <div>Starsoft</div>
      <div className="flex justify-end items-cemter">
        <ShoppingBag className="text-primaryC mr-2" />
        <div>0</div>
      </div>
    </div>
  );
};
