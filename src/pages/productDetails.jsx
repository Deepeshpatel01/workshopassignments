import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ProductDetail({ cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="info">
        <h1>{product.title}</h1>
        <p className="price">₹{product.price}</p>
        <p>{product.description}</p>
        <p>Rating: {product.rating} / 5</p>
        <p>Stock: {product.stock}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
