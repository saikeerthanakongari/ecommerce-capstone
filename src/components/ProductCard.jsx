import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <div className="product-card">
      {/* This image tag will now display the new images from products.js */}
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div className="card-actions">
        <Link to={`/product/${product.id}`} className="details-btn">View Details</Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;