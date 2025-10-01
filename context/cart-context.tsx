'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Service } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface CartItem extends Service {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (service: Service) => void;
  removeFromCart: (serviceId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (service: Service) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === service.id);
      if (existingItem) {
        toast({
          title: 'Service already in cart',
          description: `${service.name} is already in your booking request.`,
        });
        return prevItems;
      }
      toast({
        title: 'Service Added',
        description: `${service.name} has been added to your booking request.`,
      });
      return [...prevItems, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== serviceId));
    toast({
      title: 'Service Removed',
      description: 'The service has been removed from your booking request.',
      variant: 'destructive',
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  const cartTotal = cartItems.reduce((total, item) => {
    const unitPrice = Number(item.price) || 0;
    return total + unitPrice * item.quantity;
  }, 0);
  
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
  
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
