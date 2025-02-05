"use client";

import { useState, useEffect } from "react";

import { routes } from "@/services/routes";
import { Get } from "@/services/get";

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
  const [listData, setListData] = useState([]);

  const api = routes.products;

  useEffect(() => {
    Get({
      getRoute: api,
      setList: setListData,
    });
  }, [api]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {listData.length > 0 ? (
        listData.map((data: ProductProps) => (
          <CardS
            key={data.id}
            title={data.name}
            description={data.description}
            price={data.price}
            image={data.image}
          />
        ))
      ) : (
        <div className="w-full h-full flex justify-center items-center"><Loader/></div>
      )}
    </div>
  );
}
