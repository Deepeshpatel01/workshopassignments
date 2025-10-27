// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
function Header({ cart }) {
  return (
    <header className="header">
      <h2 className="logo"><Link to="/">My WebApp</Link></h2>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              <FaShoppingCart size={20} />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
