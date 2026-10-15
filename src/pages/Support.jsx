import { useState, useEffect } from "react";

export default function Support() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Support | QuickStore";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSubmitted(true);
    setQuery("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "0 16px" }}>
      <h1>Help & Support</h1>
      {submitted && (
        <div style={{ padding: "10px", background: "#dcfce7", color: "#166534", borderRadius: "6px", marginBottom: "12px" }}>
          Thank you! Your ticket has been received.
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <label htmlFor="msg">Describe your problem:</label>
        <textarea
          id="msg"
          rows={4}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="E.g. Shipping time, return policy..."
          style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
          required
        />
        <button 
          type="submit"
          style={{ padding: "10px", background: "#111827", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
}