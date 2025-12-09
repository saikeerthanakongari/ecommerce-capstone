import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="page home">
      {!showProducts ? (
        // --- LANDING VIEW ---
        <div className="welcome-container" style={styles.container}>
          <h1 style={styles.title}>Welcome to ShopCapstone</h1>
          <p style={styles.subtitle}>
            Discover the best electronics, fashion, and home accessories.
          </p>
          <button onClick={() => setShowProducts(true)} style={styles.button}>
            Click to View Products
          </button>
        </div>
      ) : (
        // --- PRODUCT VIEW (After clicking) ---
        <>
          <h1>Featured Products</h1>
          <ProductList />
        </>
      )}
    </div>
  );
};

// Simple internal styles for the welcome section
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    padding: '2rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: 'var(--text-color)',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#666',
  },
  button: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }
};

export default Home;