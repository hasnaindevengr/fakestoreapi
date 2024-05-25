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
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ width: "100%", height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}e</h5>
          <p className="card-text">{product.description}.</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
          Price - Rs . {product.prrice}
        </div>
      </div>
    )
  );
};

export default ProductDetails;
