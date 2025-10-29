
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
export default function Checkout(){
  const { cart, clearCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();
  const checkoutCart = location.state?.cart || cart;
  const total = checkoutCart.reduce((a,b) => a + b.price * (b.quantity||1), 0);
  const handlePayment = () => { const prevOrders = JSON.parse(localStorage.getItem('orders')||'[]'); localStorage.setItem('orders', JSON.stringify([...prevOrders, checkoutCart])); alert('Payment successful!'); clearCart(); navigate('/orders'); };
  return (
    <div className="checkout-page neon-page">
      <h2>Checkout</h2>
      <div className="checkout-list">
        {checkoutCart.map(p => (<div key={p.id} className="checkout-item"><img src={p.thumbnail} alt={p.title} /><div><strong>{p.title}</strong><p>Qty: {p.quantity}</p><p>₹{p.price}</p></div></div>))}
        <h3>Total: ₹{total}</h3>
        <button className="order-btn" onClick={handlePayment}>Pay ₹{total}</button>
      </div>
    </div>
  );
}
