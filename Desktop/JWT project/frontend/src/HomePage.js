import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const HomePage = () => {  
  const navigate = useNavigate();
  const [showRegistration, setShowRegistration] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="index-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <h1 className="logo">
            <span>Library Management System</span>
          </h1>
        </div>

        <div className="nav-buttons">
          <button className="nav-link" onClick={() => navigate("/")}>
            About
          </button>

          <button className="nav-link" onClick={() => navigate("/Dashboard")}>
            Dashboard
          </button>

          {/* Login button (Left side) */}
          <button 
            className="nav-btn login-btn"
            onClick={() => {
              setShowLogin(true);
              setShowRegistration(false);
            }}
          >
            Login
          </button>

          {/* Registration button */}
          <button 
            className="nav-btn signup-btn" 
            onClick={() => {
              setShowRegistration(true);
              setShowLogin(false);
            }}
          >
            Registration
          </button>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button 
              className="modal-close"
              onClick={() => setShowLogin(false)}
            >
              ✕
            </button>
            <LoginForm onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegistration && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button 
              className="modal-close"
              onClick={() => setShowRegistration(false)}
            >
              ✕
            </button>
            <RegistrationForm onClose={() => setShowRegistration(false)} />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            A library is not a luxury but one  
            <span className="highlight">of the necessities of life.</span>
          </h1>
          <p className="hero-description">
            A simple platform to manage books, members, and transactions efficiently with fast, reliable digital library operations.
          </p>
          <button className="hero-button" onClick={() => navigate("/Dashboard")}>
            Start Checking Now →
          </button>
        </div>

        <div className="hero-image">
          <img 
            src="https://media.istockphoto.com/id/2162169941/photo/bookstore.webp?s=2048x2048&w=is&k=20&c=WlJsEWpGcDRmLor7WI_UqBRRu4CNpbfLV4qKSaH_hdc="
            alt="Library" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className='spaceabovefooter'></div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2026 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;