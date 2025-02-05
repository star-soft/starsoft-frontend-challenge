"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/fetchData";

import CardS from "./_components/Card";
import { Loader } from "@/components/loader";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

export default function Home() {
  const api = "https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products"
  async function getNfts() {
    const data = await fetchData(api); 
    return data;
  }

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getNfts(),
    queryKey: ["NFTS"],
  });

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
    </div>
  );
}
