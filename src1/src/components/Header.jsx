
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import logo from "../logo.png";
export default function Header(){
  const { user, logout } = useContext(UserContext);
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [dark, setDark] = useState(localStorage.getItem('dark') === '1');
  useEffect(() => { document.body.classList.toggle('dark-mode', dark); localStorage.setItem('dark', dark ? '1' : '0'); }, [dark]);
  const handleLogout = () => { logout(); clearCart(); navigate('/'); };
  return (
    <header className="header neon">
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
          <h2 className="brand-name"> </h2>
        </Link>
      </div>
      <div className="search-bar">
        <input placeholder="Search products, brands and more..." />
        <button><FaSearch /></button>
      </div>
      <nav className="header-right">
        <ul>
          {user && <li className="welcome-text">👋 {user}</li>}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/cart" className="cart-link"><FaShoppingCart size={18} />{cart?.length > 0 && <span className="cart-count">{cart.length}</span>}</Link></li>
          <li><button className="dark-btn" onClick={() => setDark(d => !d)}>{dark ? <FaSun /> : <FaMoon />}</button></li>
          {!user ? <li><Link to="/login" className="login-btn-header">Login</Link></li> : <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>}
        </ul>
      </nav>
    </header>
  );
}
