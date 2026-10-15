import { useState, useEffect } from "react";

export default function Support() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "Customer Support";
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Support</h2>
      <input 
        type="text" 
        placeholder="Type your query..." 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <p>Preview: {message}</p>
    </div>
  );
}