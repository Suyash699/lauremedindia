import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Product } from '@shared/schema';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      addItem: (product: Product, quantity = 1) => {
        const { items } = get();
        const existingItem = items.find((item: CartItem) => item.product.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map((item: CartItem) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          });
        } else {
          set({ items: [...items, { product, quantity }] });
        }
      },
      
      removeItem: (productId: string) => {
        set({
          items: get().items.filter((item: CartItem) => item.product.id !== productId)
        });
      },
      
      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: get().items.map((item: CartItem) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      toggleCart: () => {
        set({ isOpen: !get().isOpen });
      },
      
      setCartOpen: (isOpen: boolean) => {
        set({ isOpen });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce((total: number, item: CartItem) => {
          return total + (parseFloat(item.product.price) * item.quantity);
        }, 0);
      },
    }),
    {
      name: 'lauremed-cart',
    }
  )
);