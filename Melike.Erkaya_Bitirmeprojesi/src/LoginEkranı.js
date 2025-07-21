import React from 'react';
import './LoginEkrani.css'; // CSS dosyasını import et

function LoginEkranı() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign In</h2>
        <form className="login-form" action="index.html" method="post">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              placeholder="Enter your username"
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              autoComplete="off"
            />
          </div>

          <div className="actions">
            <button type="submit" className="btn-login">Login</button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginEkranı;