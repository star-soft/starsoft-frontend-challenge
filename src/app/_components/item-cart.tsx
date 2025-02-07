import Image from "next/image";

import { useState, useEffect } from "react";

import { Trash } from "lucide-react";

import { NumberPicker } from "@/components/number-picker";
import { TooltipInfo } from "@/components/tooltip-info";
import { Button } from "@/components/ui/button";

export const ItemCart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [quantities, setQuantities] = useState<number[]>([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("purchasedItems");
    const savedQuantities = localStorage.getItem("itemQuantities");

    if (savedItems) {
      const items = JSON.parse(savedItems);
      setCartItems(items);

      if (savedQuantities) {
        setQuantities(JSON.parse(savedQuantities));
      } else {
        setQuantities(new Array(items.length).fill(1));
      }
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("itemQuantities", JSON.stringify(quantities));
    }
  }, [quantities, cartItems]);

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
    localStorage.setItem("itemQuantities", JSON.stringify(updatedQuantities));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item, index) => {
      const quantity = quantities[index] || 1;
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
                  value={quantities[index] || 1}
                  onChange={(newQuantity) =>
                    handleQuantityChange(index, newQuantity)
                  }
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
            <Image src={"/Ellipse.png"} width={20} height={23} alt="ETH Icon" />
            <div className="text-md font-semibold">{calculateTotal()} ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};
