import Link from "next/link";
import Image from "next/image";

import { AddCart, Props } from "@/services/addCartData";

import Reveal from "@/components/reveal";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Transition from "@/components/transition-components";

export default function CardS({
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
      <Card className="rounded-lg bg-tertiaryC flex flex-col h-full hover:shadow-gray-900 hover:bg-slate-950">
        <Link href={`/${id}`}>
          <CardHeader>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={image}
                width={600}
                height={200}
                alt="NFT picture"
                className="scale-110 transition-all duration-300 hover:scale-100"
              />
            </div>
          </CardHeader>
          <CardContent className="grid flex-grow gap-4">
            <Reveal>
              <CardTitle className="text-lg hover:text-primaryC">
                {title}
              </CardTitle>
            </Reveal>
            <Reveal>
              <CardDescription className="text-xs hover:text-primaryC">
                {description}
              </CardDescription>
            </Reveal>
            <Reveal>
              <div className="flex items-center gap-2 my-4">
                <Image
                  src={"/Ellipse.png"}
                  width={25}
                  height={20}
                  alt="ETH Icon"
                />
                <div className="text-xl">{price} ETH</div>
              </div>
            </Reveal>
          </CardContent>
        </Link>
        <CardFooter className="flex justify-end mt-auto pt-2">
          <Button onClick={HandleSubmitData}>COMPRAR</Button>
        </CardFooter>
      </Card>
    </Transition>
  );
}
