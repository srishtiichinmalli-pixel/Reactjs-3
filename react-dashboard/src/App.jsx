import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

export default function App() {
  // Boolean state for conditional rendering
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} onToggleAuth={handleToggleAuth} />

      <main className="main-content">
        {/* Conditional Rendering using Ternary Operator */}
        {isLoggedIn ? (
          <Home />
        ) : (
          <Login onLogin={handleToggleAuth} />
        )}
      </main>
    </div>
  );
}