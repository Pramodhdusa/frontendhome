import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import './index.css';

function RegistrationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER'  
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const message = await response.text();

      if (response.ok) {
        alert("Registration Successful");
        onClose(); 
        setFormData({
          name: '',
          email: '',
          password: '',
          role: 'USER'
        });
      } else {
        alert(message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Server error. Please try again.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container1">
      <div className="form-container1">
        <div className="header1">
          <h2>
            <UserPlus className="icon1" /> Create Account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="form1">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
          
          <select name="role" value={formData.role} onChange={handleChange} className="role-select" required>
            <option value="USER">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
          
          <button type="submit">Register</button>
        </form>

        <p className="footer-text1">
          Already have an account? Use Login.
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
