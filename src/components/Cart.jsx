import React from 'react';
import useStore from '../store/useStore';

const Cart = () => {
  const { cart, removeFromCart } = useStore();
  
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-container">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.title} (x{item.quantity})</h4>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;