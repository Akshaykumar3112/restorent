import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import '../style/style.css';
import CustomButton from "../components/Button";
const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
  
    return (
      <div className="cart-container">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>ID: {item.id || 'N/A'}</p>
              <p>Name: {item.name || 'Unnamed item'}</p>
              <CustomButton 
                onClick={() => removeFromCart(item.id)} 
                label="Remove From CART" 
                styleType="btn-primary"
               />
            </div>
          ))
        ) : (
          <h1>Your Cart is Empty!</h1>
        )}
      </div>
    );
  }
  
  export default Cart;