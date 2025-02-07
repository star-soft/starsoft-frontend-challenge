"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import useFetchNfts from "@/hooks/useFetchNfts";
import ProductDetails from "./_components/product-details";

import { Loader } from "@/components/loader";
import { BackHome } from "../../components/back-home";
import { NotFound } from "@/components/not-found";

const ProductOverview: React.FC = () => {
  // Get ID from URL
  const { id } = useParams();
  const [limit, setLimit] = useState(10); 
  const [products, setProducts] = useState<any[]>([]);
  const [product, setProduct] = useState<any>(null);

  const { data, isLoading, isError } = useFetchNfts(limit);

  useEffect(() => {
    if (data) {
      const totalItems = data.metadata.count;
      // Get count from metadata
      setLimit(totalItems);

      // Function to load all products
      const loadProductsFromPages = async () => {
        let allProducts: any[] = [...data.data];

        setProducts(allProducts); 
      };

      loadProductsFromPages();
    }
  }, [data]);

  // Filter the product based on the ID from the URL
  useEffect(() => {
    if (products.length > 0 && id) {
      const selectedProduct = products.find((product) => product.id === parseInt(id as string));
      setProduct(selectedProduct);
    }
  }, [products, id]);

  if (isLoading) return <Loader/>;
  if (isError) return <div>Desculpa, houve um erro ao carregar os dados.</div>;

  if (!product) return <NotFound/>;

  return (
    <>
      <ProductDetails
        id={product.id}
        title={product.name}
        createdAt={new Date(product.createdAt).toLocaleString()} 
        description={product.description}
        price={product.price.toString()} 
        image={product.image}
      />
      <BackHome/>
    </>
  );
};

export default ProductOverview;
