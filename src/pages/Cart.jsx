export default function Cart({ cartItems, onRemoveFromCart, onClearCart }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
      <h1>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p style={{ color: "#6b7280" }}>Your cart is empty. Go add some gadgets!</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item, index) => (
              <li 
                key={index} 
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderBottom: "1px solid #e5e7eb"
                }}
              >
                <span>{item.title} — <strong>${item.price}</strong></span>
                <button 
                  onClick={() => onRemoveFromCart(index)}
                  style={{ color: "#ef4444", background: "none", border: "none", cursor: "pointer" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice}</h3>
          <button 
            onClick={onClearCart}
            style={{ padding: "8px 14px", background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}