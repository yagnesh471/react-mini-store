import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Support from "./pages/Support";

export default function App() {
  const [cart, setCart] = useState([]);

  // Add an item to cart
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove single item by its array index
  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  // Clear all items
  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <main style={{ fontFamily: "sans-serif" }}>
        <Routes>
          <Route path="/" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route 
            path="/cart" 
            element={
              <Cart 
                cartItems={cart} 
                onRemoveFromCart={handleRemoveFromCart} 
                onClearCart={handleClearCart} 
              />
            } 
          />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}