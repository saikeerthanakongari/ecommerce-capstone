import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../api/products';
import useStore from '../store/useStore';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const addToCart = useStore((state) => state.addToCart);

  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        <p className="desc">{product.description}</p>
        <p className="price">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;