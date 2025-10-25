import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="home">
      <h2 className="home-title">Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
