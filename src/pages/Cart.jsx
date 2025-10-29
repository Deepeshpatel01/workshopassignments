
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
export default function Cart(){
  const { cart, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((a,b) => a + b.price * (b.quantity||1), 0);
  return (
    <div className="cart-page neon-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div className="info">
                  <h3>{item.title}</h3>
                  <p className="price">₹{item.price}</p>
                  <div className="qty-controls"><button onClick={() => decreaseQty(item.id)}>-</button><span>{item.quantity}</span><button onClick={() => increaseQty(item.id)}>+</button></div>
                  <div style={{ marginTop: 8 }}><button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button></div>
                </div>
              </div>
            ))}
          </div>
          <h2>Total: ₹{total}</h2>
          <button className="checkout-btn" onClick={() => navigate('/checkout', { state: { cart } })}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
