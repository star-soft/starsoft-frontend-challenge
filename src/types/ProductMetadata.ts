import { Product } from "./Product";

export interface ProductMetadata {
  hasNextPage: boolean;
  count: number;
  products: Product[];
  metadata: {
    page: number;
    limit: number;
    count: number;
    pageCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
