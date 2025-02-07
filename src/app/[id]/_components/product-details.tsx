import Image from "next/image";

import { AddCart, Props } from "@/services/addCartData";

import Reveal from "@/components/reveal";

import { Button } from "@/components/ui/button";
import Transition from "@/components/transition-components";

export default function ProductDetails({
  id,
  image,
  title,
  createdAt,
  description,
  price,
}: Props) {
  const HandleSubmitData = () => {
    AddCart({
      id,
      image,
      title,
      createdAt,
      description,
      price,
    });
  }

  return (
    <Transition>
      <div className="md:flex bg-tertiaryC p-4 md:p-6 lg:p-12 rounded-lg h-full items-center">
        <div className="overflow-hidden rounded-lg ">
          <Image
            src={image}
            width={800}
            height={200}
            alt="NFT picture"
            className="scale-110 transition-all duration-300 hover:scale-100"
          />
        </div>
        <div className="md:p-4 py-4 md:py-0">
          <Reveal>
            <div className="text-4xl md:text-6xl mt-4md:mt-0 font-extrabold">{title}</div>
          </Reveal>
          <Reveal>
            <p className="text-xs font-light">Criado ás {createdAt}</p>
          </Reveal>
          <Reveal>
            <div className="text-md font-light my-6 md:my-4 lg:my-6">{description}</div>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-2 my-2 lg:my-4">
              <Image
                src={"/Ellipse.png"}
                width={25}
                height={20}
                alt="ETH Icon"
              />
              <div className="text-2xl font-semibold">{price} ETH</div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 md:gap-4 mt-4 md:mt-0 lg:mt-8">
            <div className="flex justify-end mt-auto pt-2">
              <Button onClick={HandleSubmitData} className="bg-quaternaryC ">
                ADICIONAR AO CARRINHO
              </Button>
            </div>
            <div className="flex justify-end mt-auto pt-2">
              <Button>COMPRAR</Button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
