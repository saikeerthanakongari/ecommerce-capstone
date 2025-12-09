import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';
import ThemeToggle from './ThemeToggle';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const cart = useStore((state) => state.cart);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo"><Link to="/">ShopCapstone</Link></div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout" className="cart-link">
          <FaShoppingCart />
          <span className="badge">{cartCount}</span>
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;