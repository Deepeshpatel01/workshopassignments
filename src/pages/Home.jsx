
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
export default function Home(){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  useEffect(() => { fetch("https://dummyjson.com/products").then(res => res.json()).then(data => { setProducts(data.products); setLoading(false); }).catch(() => setLoading(false)); }, []);
  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;
  return (
    <div className="home neon-page">
      <h2 className="home-title">Featured Products</h2>
      <div className="product-grid">
        {products.map(p => (
          <div className="product-card" key={p.id}>
            <Link to={`/product/${p.id}`}><div className="thumb-wrap"><img src={p.thumbnail} alt={p.title} /></div></Link>
            <div className="card-body">
              <h3>{p.title}</h3>
              <p className="price">₹{p.price}</p>
              <div className="actions">
                <button className="add-btn" onClick={() => addToCart(p)}>Add to Cart</button>
                <Link to={`/product/${p.id}`}><button className="view-btn">View</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
