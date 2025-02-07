"use client";

import {useState} from "react";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import CardS from "./_components/Card";
import useFetchNfts from "@/hooks/useFetchNfts";

export default function Home() {
  const [limit, setLimit] = useState(12);

  const { data, isLoading, isError } = useFetchNfts(limit);

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
      {data?.data?.map((product) => (
        <CardS
          key={product.id}
          id={product.id}
          title={product.name}
          createdAt={product.createdAt}
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
