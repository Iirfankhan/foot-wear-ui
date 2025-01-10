import React, { useEffect, useState } from "react";
import "../styles/Details.css";
import Products from "../components/Products"
import Quantity from "../components/Quantity";
import Button from "../components/Button";
import axios from "axios";
import {  useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const [activeSize, setActiveSize] = useState('Small');
  const [activeSleeve, setActiveSleeve] = useState(null);
  const { Id } = useParams(); // Get the productId from the URL
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  

  useEffect(() => {
    // Fetch product details using productId
    axios
      .get(`http://localhost:3001/api/product/${Id}`)
      .then((response) => setProduct(response.data))

      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [Id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }
// this functions are handling the size and sleeve slected

  const handleSizeButtonClick = (size) => {
    setActiveSize(size); // Set the active button's size
  };
  const handleSleeveButtonClick = (sleeve) => {
    setActiveSleeve(sleeve); // Set the active button's size
  };

// this function is getting the total quantity of the item 

   const handleQuantityChange = (newQuantity) => {
     setQuantity(newQuantity);
    
   };

  //  here products are dispatching or getting from the reux

 const handleCartClick = () => {
   const token = localStorage.getItem("token");

   if (!token) {
     toast.error("Please log in to add items to the cart.");
     return;
   }

   // If token exists, proceed to add to cart
   dispatch(addProduct({ ...product, quantity, activeSize, activeSleeve }));
   toast.success("Item added to cart!");
 };

  return (
    <>
      <div className="details-container container">
        <div className="left">
          <img src={product.img} alt="Real Madrid Shirt" />
        </div>
        <div className="right">
          <h1>{product.title}</h1>
          <div className="price-div">
            <span className="originl-price">{product.originalPrice}</span>
            <span className="sal-price">{product.sellingPrice}</span>
            <span className="sale">Sale</span>
          </div>
          <div className="size-selector" style={{ marginTop: "1rem" }}>
            <span>Size</span>
            {product.size &&
              product.size[0]
                .split(/[\n,]+/) // Split by \n or ,
                .map((size, index) => (
                  <button
                    key={index}
                    className={`size-button ${
                      activeSize === size.trim() ? "active" : ""
                    }`}
                    onClick={() => handleSizeButtonClick(size.trim())}
                  >
                    {size.trim()}
                  </button>
                ))}
          </div>
          {/* sleeve button */}
          {product.category !== "Shorts" &&
            product.sleeve &&
            product.sleeve.length > 0 && (
              <div className="size-selector" style={{ marginTop: "1rem" }}>
                <span>Sleeve</span>
                {product.sleeve &&
                  product.sleeve[0]
                    .split(/[\n,]+/) // Split by \n or ,
                    .map((sleeve, index) => (
                      <button
                        key={index}
                        className={`size-button ${
                          activeSleeve === sleeve.trim() ? "active" : ""
                        }`}
                        onClick={() => handleSleeveButtonClick(sleeve.trim())}
                      >
                        {sleeve.trim()}
                      </button>
                    ))}
              </div>
            )}

          {/* Quantity */}
          <Quantity onQuantityChange={handleQuantityChange} />
          {/* call to action buttons */}
          <div className="button-dev">
            <Button
              label="Add to Cart"
              onClick={() => handleCartClick()}
              type="transparent"
              size="medium"
            />
            {/* <Button
              label="Buy it now"
              onClick={() => navigation('/checkout')}
              type="primry"
              size="medium"
            /> */}
          </div>
        </div>
      </div>
      <Products />
      <ToastContainer  />
    </>
  );
};

export default Details;
