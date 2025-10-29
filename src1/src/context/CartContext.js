
import { createContext, useState, useCallback } from "react";
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) return prev.map((p) => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);
  const increaseQty = useCallback((id) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  }, []);
  const decreaseQty = useCallback((id) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0));
  }, []);
  const removeFromCart = useCallback((id) => { setCart((prev) => prev.filter((item) => item.id !== id)); }, []);
  const clearCart = useCallback(() => setCart([]), []);
  return <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}
