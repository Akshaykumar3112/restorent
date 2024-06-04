import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        alert('hello');
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
       setCart((prevCart) => prevCart.filter(product => product.id !== productId)); 
    };

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )

};

export default CartContextProvider;