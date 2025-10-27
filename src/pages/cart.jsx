import React from "react";


function Cart({ cart, setCart }) {
  const removeItem = (id) => setCart(cart.filter(item => item.id !== id));
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="info">
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: ₹{totalPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;
