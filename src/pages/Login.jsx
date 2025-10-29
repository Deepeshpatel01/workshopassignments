
import React, { useContext, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function Login(){
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const users = [ { username: "Deepesh", password: "123456" }, { username: "TestUser", password: "123456" } ];
  const handleSubmit = (e) => { e.preventDefault(); const pwd = passwordRef.current.value; const found = users.find(u => u.username === username && u.password === pwd); if (!found) { setError("Wrong username or password"); return; } login(found.username); navigate(from, { replace: true }); };
  return (
    <div className="login-page neon-page">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <div className="input-group"><label>Username</label><input value={username} onChange={e => setUsername(e.target.value)} /></div>
        <div className="input-group"><label>Password</label><input type="password" ref={passwordRef} /></div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}
