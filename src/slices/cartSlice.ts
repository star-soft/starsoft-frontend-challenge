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
  isSold: boolean;
}

const initialState: CartState = {
  items: [],
  total: 0,
  isOpen: false,
  isSold: false,
};
const addToast = () => {
  toast.success("Produto adicionado ao carrinho", {
    style: { color: "green" },
    duration: 2000,
  });
};
const removeToast = () => {
  toast.warning("Produto removido do carrinho", {
    icon: "🗑️",
    duration: 2000,
  });
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
        addToast();
        state.isOpen = true;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
        addToast();
        //somar os valores dos produtos
        state.total += action.payload.price;
        state.isOpen = true;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      removeToast();
    },
    removeQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload,
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        state.total -= existingItem.price;
        removeToast();

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
        addToast();

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
