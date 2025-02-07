


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthForm.css';
import { signup, login } from '../apis/index';
import Cookies from 'js-cookie';

function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    mobile: '',
    company: '',
  });
  const navigate = useNavigate();

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setError(null); // Clear errors when switching tabs
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      let response;
      if (activeTab === 'login') {
        response = await login({ email: formData.email, password: formData.password });
      } else {
        response = await signup({
          email: formData.email,
          password: formData.password,
          mobile: formData.mobile,
          company: formData.company,
          name: formData.name,
          role: 'user',
        });
      }

      console.log(response)
      const { token } = response;
      Cookies.set('authToken', token); // Store token in cookies for 7 days
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
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

      <div className="form-content">
        <h2>{activeTab === 'login' ? 'LOGIN' : 'SIGN UP'}</h2>
        <form onSubmit={handleSubmit}>
          {activeTab === 'signup' && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name here"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email here"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Ex. 91| Enter mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name here"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="required">*</span>
                </label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password here"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="password-toggle">👁</span>
                </div>
              </div>
            </>
          )}
          {activeTab === 'login' && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email here"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="password-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password here"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="password-toggle">👁</span>
                </div>
              </div>
              <div className="form-extra">
                <a href="#otp" className="otp-link">
                  Login With OTP
                </a>
              </div>
            </>
          )}


{error && <div className="error-message text-red-500">{error}</div>}          <div className="button-group">
            <button type="submit" className="btn primary-btn" disabled={loading}>
              {loading ? 'Processing...' : activeTab === 'login' ? 'Login' : 'Sign Up'}
            </button>
            {activeTab === 'login' && (
              <button type="button" className="btn google-btn">
                <img
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google icon"
                />
                Sign in with Google
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
