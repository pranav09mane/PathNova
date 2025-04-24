import React, { useState } from 'react';
import { createUser, signInUser } from '../firebaseAuth';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      await createUser(email, password);
    } else {
      await signInUser(email, password);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: 'block', width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
        />
        <button type="submit" style={{ width: '100%', padding: '0.5rem' }}>
          {isSignUp ? "Create Account" : "Log In"}
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignUp(!isSignUp)} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
