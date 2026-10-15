import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [itemsCount, setItemsCount] = useState(0);

  const handleAdd = () => {
    setItemsCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Catalog</h2>
      <p>Items in cart: <strong>{itemsCount}</strong></p>

      <div style={{ display: "flex", gap: "15px" }}>
        <ProductCard title="Wireless Mouse" price={25} onAddToCart={handleAdd} />
        <ProductCard title="Mechanical Keyboard" price={75} onAddToCart={handleAdd} />
      </div>
    </div>
  );
}