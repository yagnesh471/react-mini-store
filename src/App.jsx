import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/support" element={<Support />} />
          {/* Optional 404 Route */}
          <Route path="*" element={<h2 style={{ padding: "20px" }}>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}