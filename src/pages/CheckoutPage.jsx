import React from 'react';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  return (
    <div className="page checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-grid">
        <Cart />
        <Checkout />
      </div>
    </div>
  );
};

export default CheckoutPage;