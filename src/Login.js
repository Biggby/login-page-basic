import React from 'react';
import './App.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3>Log In</h3>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder='Enter Username' required/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter Passwrd" required/>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
