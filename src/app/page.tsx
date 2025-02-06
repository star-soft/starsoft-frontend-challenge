"use client";

import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/fetchData";

import CardS from "./_components/Card";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

export default function Home() {
  const [limit, setLimit] = React.useState(12);

  const getNfts = async (limit: number) => {
    const data = await fetchData(
      `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?limit=${limit}`
    );
    return data;
  };

  const { data, isLoading, isError } = useQuery<{
    data: ProductProps[];
    metadata: { count: number };
  }>({
    queryKey: ["NFTS", limit],
    queryFn: () => getNfts(limit),
    enabled: limit > 0,
    placeholderData: (prev) => prev,
  });

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 8);
  };

  const progress = data?.metadata.count
    ? Math.min((limit / data.metadata.count) * 100, 100)
    : 0;

  if (isLoading) return <Loader />;
  if (isError) return <div>Desculpa, houve um erro</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data?.data?.map((product: ProductProps) => (
        <CardS
          key={product.id}
          title={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
      <div className="col-span-1 md:col-span-3 lg:col-span-4 flex justify-center">
        <div className="w-1/4">
          <Progress value={progress} className="bg-quaternaryC" />
          <div>
            {progress < 100 ? (
              <Button className="bg-quaternaryC mt-2" onClick={handleLoadMore}>
                Carregar mais
              </Button>
            ) : (
              <Button className="bg-quaternaryC mt-2" disabled>
                Você já viu tudo!
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
