import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';

function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginClick = () => {
    // Redirect to the /dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      {/* Tabs: Login & Sign Up */}
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('login')}
        >
          Login
        </button>
        <button
          className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
          onClick={() => handleTabSwitch('signup')}
        >
          Sign Up
        </button>
      </div>

      {/* Conditionally Render: Login or Sign Up Form */}
      {activeTab === 'login' ? (
        <div className="form-content">
          <h2>LOGIN</h2>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email here" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input type="password" placeholder="Enter password here" required />
                <span className="password-toggle">👁</span>
              </div>
            </div>
            <div className="form-extra">
              <a href="#otp" className="otp-link">Login With OTP</a>
            </div>
            <div className="button-group">
              <button
                type="button"
                className="btn primary-btn"
                onClick={handleLoginClick} // Trigger the redirect on click
              >
                Login
              </button>
              <button type="button" className="btn google-btn">
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google icon"
                />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-content">
          <h2>SIGN UP</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>
                  Name <span className="required">*</span>
                </label>
                <input type="text" placeholder="Enter name here" required />
              </div>
              <div className="form-group">
                <label>
                  Email <span className="required">*</span>
                </label>
                <input type="email" placeholder="Enter email here" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Mobile</label>
                <input type="text" placeholder="Ex. 91| Enter mobile number" />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" placeholder="Enter company name here" />
              </div>
            </div>
            <div className="form-group">
              <label>
                Password <span className="required">*</span>
              </label>
              <div className="password-wrapper">
                <input type="password" placeholder="Enter password here" required />
                <span className="password-toggle">👁</span>
              </div>
            </div>
            <button type="submit" className="btn primary-btn signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
