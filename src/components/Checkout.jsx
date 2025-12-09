import React, { useState } from 'react';
import useStore from '../store/useStore';

const Checkout = () => {
  const clearCart = useStore((state) => state.clearCart);
  const [done, setDone] = useState(false);

  const handleCheckout = (e) => {
    e.preventDefault();
    setDone(true);
    clearCart();
  };

  if (done) return <div className="success">Thank you for your order!</div>;

  return (
    <form onSubmit={handleCheckout} className="checkout-form">
      <h3>Shipping Details</h3>
      <input type="text" placeholder="Full Name" required />
      <input type="text" placeholder="Address" required />
      <input type="text" placeholder="Card Number" required />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;