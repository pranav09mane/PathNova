import React, { useState } from "react";
import { createUser, signInUser } from "./firebaseAuth";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUser(email, password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInUser(email, password);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Signup / Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", margin: "0.5rem 0" }}
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={handleSignup}>Sign Up</button>
          <button onClick={handleLogin}>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
