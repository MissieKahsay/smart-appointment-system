import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, time }),
      });

      const data = await res.json();
      setResponse(data);
      alert("✅ Appointment submitted successfully (test mode).");
    } catch (err) {
      alert("❌ Submission failed. Check the console.");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "600px",
        margin: "auto",
        background: "#f8f9fa",
        borderRadius: "12px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Smart Appointment Booking
      </h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
            placeholder="e.g. John Doe"
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
            placeholder="e.g. john@example.com"
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontWeight: "bold" }}>
            Appointment Time
          </label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            style={inputStyle}
            placeholder="e.g. 2025-07-06 14:00"
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Submit Appointment
        </button>
      </form>

      {response && (
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "#e2f0d9",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "14px",
          }}
        >
          <strong>✅ Server Response:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default App;
