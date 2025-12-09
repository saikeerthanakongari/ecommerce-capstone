import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useStore from './store/useStore';

// Components
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  // Access global theme state
  const theme = useStore((state) => state.theme);

  // Apply the 'dark' class to the body tag whenever the theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;