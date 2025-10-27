import React from 'react';

const Checkout = ({ cart }) => {
  const handlePayment = () => {
    alert("Payment successful! 🎉");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="payment-options">
        <h4>Select Payment Method</h4>
        <label><input type="radio" name="payment" /> UPI</label>
        <label><input type="radio" name="payment" /> Credit/Debit Card</label>
        <label><input type="radio" name="payment" /> Cash on Delivery</label>
      </div>
      <button onClick={handlePayment} className="order-btn">Order Now</button>
    </div>
  );
};

export default Checkout;
