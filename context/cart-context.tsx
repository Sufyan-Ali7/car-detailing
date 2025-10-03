'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Service } from '@/types';

export interface CartItem extends Service {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (service: Service) => boolean; // true if added, false if already existed
  removeFromCart: (serviceId: string) => boolean; // true if removed
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (service: Service): boolean => {
    let wasAdded = false;

    setCartItems(prev => {     
      const exists = prev.some(item => item.id === service.id);
      if (exists) return prev;
      wasAdded = true;
      return [...prev, { ...service, quantity: 1 }];
    });

    return wasAdded;
  };

  const removeFromCart = (serviceId: string): boolean => {
    let wasRemoved = false;
    setCartItems(prev => {
      if (prev.some(i => i.id === serviceId)) wasRemoved = true;
      return prev.filter(i => i.id !== serviceId);
    });
    return wasRemoved;
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    return sum + price * item.quantity;
  }, 0);

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
};
