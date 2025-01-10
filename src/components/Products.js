import React, { useEffect, useState } from "react";
import Product from "./Product";
import "../styles/Products.css";

import axios from "axios";

 

 

const Products = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/product");
        setProducts(response.data); // Assuming the API returns an array of products
      } catch (err) {
        console.log(err)
      }
    };

    fetchProducts();
  }, []);

   


  return (
    <>
      {/* Here is rendering the Player version section in home screen products  */}
      <div className="title">
        <h1>PLAYER VERSION</h1>
      </div>
      <Product data={products} category={"PLAYER VERSION"} />
      {/* Here is rendering the Featured Collection section in home screen products */}
      <div className="title">
        <h1>Retro Shirts</h1>
      </div>
      <Product data={products} category={"Retro Shirts"} />
      {/* Here is rendering the shorts section in home screen products  */}

      <div className="title">
        <h1>Club Shirts</h1>
      </div>
      <Product data={products} category={"Club Shirts"} />
      <div className="title">
        <h1>Shorts</h1>
      </div>
      <Product data={products} category={"Shorts"} />
    </>
  );
};

export default Products;
