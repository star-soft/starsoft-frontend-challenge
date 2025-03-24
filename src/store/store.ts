// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/slices/productsSlice";
import cartReducer from "@/slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
