import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="page home">
      <h1>Featured Products</h1>
      <ProductList />
    </div>
  );
};

export default Home;