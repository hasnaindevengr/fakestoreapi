import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    let response = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await response.json();
    setProduct(data);
    console.log(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    product && (
      <div>
        <h1>Title:{product.title}</h1>
        <img src={product.image} alt={product.title} />
        <h2>Description:{product.description}</h2>
        <p>Price: {product.price}</p>
      </div>
    )
  );
};

export default ProductDetails;
