import { ProductMetadata } from "@/types/ProductMetadata";
import httpService from "../api/httpService";
import { Product } from "@/types/Product";

interface ProductResponse {
  products: Product[];
  metadata: ProductMetadata;
}

export const productRepo = {
  getProducts: async (
    page: number,
    limit: number,
  ): Promise<ProductResponse> => {
    const response = await httpService.get<{
      data: Product[];
      metadata: ProductMetadata;
    }>("/products", {
      params: { page, limit },
    });
    return {
      products: response.data.data, // Produtos retornados pela API
      metadata: response.data.metadata, // Metadados da API
    };
  },
};
