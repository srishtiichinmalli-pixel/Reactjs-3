import React from 'react';

export default function Login({ onLogin }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Please log in to access your employee directory and dashboard.</p>
        <button className="primary-btn" onClick={onLogin}>
          Log In
        </button>
      </div>
    </div>
  );
}