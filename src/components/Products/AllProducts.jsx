import { useState, useEffect } from "react";
import "../../stylesheets/allproducts.css";
import { Link } from "react-router-dom";

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.slice(0, 100) + "...";
};

const AllProducts = () => {
  // define useState and initialized it with : products = useState([])
  const [products, setProducts] = useState([]);

  // get fake api from: https://fakestoreapi.com/
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  const getCatProducts = async (name) => {
    let response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
    let data = await response.json();
    setProducts(data);








  // UI dispaly / design
  return (
    <div className="container my-3 pt-5 pb-5">
      {/* 3 x buttons to diplay products category wise */}
      <button onClick={()=>getCatProducts('jewelery')}>Jewellary</button>
      <button onClick={()=>getCatProducts('electronics')}>Electronics</button>
      <button onClick={()=>getCatProducts('women\s clothing')}>Women's Clothing</button>
      

      {/* Header Section is here */}
      <h1>Products</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-sm-12 col-md-6 col-lg-3">
            {/* <Link to={"/products/$" + product.id}> */}

            {/* Card Section Start Here */}
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ width: "100%", height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <Link to={`/products/${product.id}`}>
                  <h6 className="card-title">{product.title}</h6>
                </Link>
                <p className="card-text">
                  {truncateDescription(product.description)}
                </p>
                <a href="#" className="btn btn-primary">
                  Price - Rs. {product.price}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
