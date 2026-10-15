export default function ProductCard({ item, onAddToCart }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: "8px",
      padding: "16px",
      width: "200px",
      backgroundColor: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <div>
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>{item.title}</h3>
        <p style={{ margin: 0, color: "#4b5563", fontWeight: "bold" }}>${item.price}</p>
      </div>
      <button 
        onClick={() => onAddToCart(item)}
        style={{
          marginTop: "16px",
          padding: "8px 12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}