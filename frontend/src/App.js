import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://<your-api-url>", {
      method: "POST",
      body: JSON.stringify({ name, email, time }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time"
          required
        />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default App;
