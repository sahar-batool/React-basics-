import { createContext, useContext, useState} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
 
  const [cart, setCart] = useState([]);
  

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, qty: c.qty + 1 } : c
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
   const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);