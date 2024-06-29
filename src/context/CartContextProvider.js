import React, { useState,useEffect } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
const [cart, setCart] = useState(() => {
    // Load cart from localStorage, or default to an empty array
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    if (quantity < 1) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === product.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        product.quantity = quantity;
        return [...prevCart, product];
      }
    });
  };


  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== productId)); 
 };

 const editCartItem = (productId, quantity) => {
    setCart((prevCart) => {
        return prevCart.map((cartItem) =>
            cartItem.id === productId 

            ? {...cartItem, quantity : quantity } 
            : cartItem
        )
    })
 };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, editCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
