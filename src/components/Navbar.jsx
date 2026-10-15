import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f0f0f0" }}>
      <strong>QuickStore</strong>
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/support">Support</Link>
    </nav>
  );
}