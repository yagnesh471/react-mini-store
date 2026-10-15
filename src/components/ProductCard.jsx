export default function ProductCard({ title, price, onAddToCart }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "6px", width: "160px" }}>
      <h4>{title}</h4>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}