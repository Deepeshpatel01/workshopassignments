
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
export default function ProductDetail(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  useEffect(() => { fetch(`https://dummyjson.com/products/${id}`).then(r => r.json()).then(d => { setProduct(d); setLoading(false); }).catch(() => setLoading(false)); }, [id]);
  if (loading) return <div style={{ padding: 40 }}>Loading...</div>;
  if (!product) return <div style={{ padding: 40 }}>Product not found</div>;
  return (
    <div className="product-detail neon-page">
      <img src={product.thumbnail} alt={product.title} />
      <div className="info">
        <h1>{product.title}</h1>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>
        <div className="actions"><button className="add-btn" onClick={() => addToCart(product)}>Add to Cart</button></div>
      </div>
    </div>
  );
}
