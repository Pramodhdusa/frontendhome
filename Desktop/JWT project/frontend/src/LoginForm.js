import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import './index.css';
import { useNavigate } from 'react-router-dom';
function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    const res = await fetch("http://localhost:8080/api/auth/login",{
      method:"POST",
      headers:{
      "Content-Type":"application/json"
    },
      body:JSON.stringify({username,password})
    });

    const data = await res.json();

    if(res.ok){

      localStorage.setItem("token",data.token);
      console.log(data);
      
      window.location="/temp1";

    }else{

      alert(data.message);
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;
  
  if (name === 'username') {
    setUsername(value);
  } else if (name === 'password') {
    setPassword(value);
  }
};


  return (
    <div className="container1">
      <div className="form-container1">
        <div className="header1">
          <h2>
            <LogIn className="icon1" /> Login
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="form1">
          <input 
            type="text" 
            name="username" 
            value={username} 
            onChange={handleChange} 
            placeholder="Username" 
            required 
          />
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={handleChange} 
            placeholder="Password" 
            required 
          />
          <button type="submit">Login</button>
        </form>

        <p className="footer-text1">
          New user? Please register.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
