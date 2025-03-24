// src/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/Product";
import { toast } from "sonner";

interface CartItem extends Product {
  quantity: number;
  total: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  total: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
        //somar os valores dos produtos
        state.total += existingItem.price;
        toast.success("Produto adicionado ao carrinho");
        state.isOpen = true;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
        //somar os valores dos produtos
        toast.success("Produto adicionado ao carrinho");
        state.total += action.payload.price;
        state.isOpen = true;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        state.total -= existingItem.price;
        toast.success("Produto removido do carrinho");

        if (existingItem.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id,
          );
        }
      }
    },
    addQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Produto adicionado ao carrinho");

        state.total += existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    toggleCart: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeQuantity,
  addQuantity,
  toggleCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
