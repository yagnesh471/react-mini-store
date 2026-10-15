import ProductCard from "../components/ProductCard";

const PRODUCTS = [
  { id: 1, title: "Wireless Mouse", price: 25 },
  { id: 2, title: "Mechanical Keyboard", price: 85 },
  { id: 3, title: "Gaming Headset", price: 60 },
  { id: 4, title: "USB-C Hub", price: 30 },
];

export default function Shop({ onAddToCart }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px" }}>
      <h1>Available Products</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} item={prod} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}