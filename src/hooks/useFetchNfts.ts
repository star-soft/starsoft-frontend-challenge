import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/services/fetchData";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

// API exposed for the purpose of demonstrating its usage in the test
const useFetchNfts = (limit: number) => {
  const getNfts = async (limit: number) => {
    const data = await fetchData(
      `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?limit=${limit}`
    );
    return data;
  };

  return useQuery<{
    data: ProductProps[];
    metadata: { count: number };
  }>({
    queryKey: ["NFTS", limit],
    queryFn: () => getNfts(limit),
    enabled: limit > 0,
    placeholderData: (prev) => prev,
  });
};

export default useFetchNfts;
