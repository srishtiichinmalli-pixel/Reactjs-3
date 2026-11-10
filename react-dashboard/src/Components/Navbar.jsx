import React from 'react';

export default function Navbar({ isLoggedIn, onToggleAuth }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>PortalApp</h1>
      </div>
      <div className="nav-action">
        {/* Conditional button text and styling */}
        <button 
          className={isLoggedIn ? "logout-btn" : "login-nav-btn"} 
          onClick={onToggleAuth}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}