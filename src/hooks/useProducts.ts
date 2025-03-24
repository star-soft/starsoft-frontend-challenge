import { useQuery } from "@tanstack/react-query";
import { productRepo } from "@/repositories/productRepo";

export const useProducts = (page: number) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: () => productRepo.getProducts(page, 10),
    refetchOnWindowFocus: false,
    placeholderData: (previousData) => previousData,
  });
};
