import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/Product";
import { ProductMetadata } from "@/types/ProductMetadata";

interface ProductsState {
  products: Product[];
  page: number;
  metadata: ProductMetadata | null;
  cart: Product[];
}

const initialState: ProductsState = {
  products: [],
  page: 1,
  metadata: null,
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (
      state,
      action: PayloadAction<{ products: Product[]; metadata: ProductMetadata }>,
    ) => {
      state.products = action.payload.products;
      state.metadata = action.payload.metadata;
    },

    addProducts: (
      state,
      action: PayloadAction<{ products: Product[]; metadata: ProductMetadata }>,
    ) => {
      const newProducts = action.payload.products.filter(
        (newProduct) =>
          !state.products.some((product) => product.id === newProduct.id),
      );
      state.products = [...state.products, ...newProducts];
      state.metadata = action.payload.metadata;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setProducts, addProducts, setPage } = productsSlice.actions;
export default productsSlice.reducer;
