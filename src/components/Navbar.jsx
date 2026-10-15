import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#2563eb" : "#374151",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "2px solid #2563eb" : "none",
    paddingBottom: "4px"
  });

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 24px",
      backgroundColor: "#ffffff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
      marginBottom: "20px"
    }}>
      <h2 style={{ margin: 0, color: "#111827" }}>QuickStore ⚡</h2>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <NavLink to="/" style={linkStyle}>Shop</NavLink>
        <NavLink to="/cart" style={linkStyle}>
          Cart {cartCount > 0 && <span style={{
            background: "#ef4444",
            color: "white",
            borderRadius: "999px",
            padding: "2px 8px",
            fontSize: "12px",
            marginLeft: "4px"
          }}>{cartCount}</span>}
        </NavLink>
        <NavLink to="/support" style={linkStyle}>Support</NavLink>
      </div>
    </nav>
  );
}