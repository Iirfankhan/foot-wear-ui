import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ data, category }) => {
  const navigation = useNavigate();

  return (
    <div className="product-container">
      {/* Filter products by category */}
      {data
        .filter((item) => item.category === category) // Only include "PLAYER VERSION" items
        .map((item, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => {
              navigation(`/details/${item._id}`);
            }}
          >
            <div className="image-container">
              <img src={item.img} alt={item.title} className="product-image" />
              <div className="card-badge">Sale</div>
            </div>
            <div className="product-info">
              <h5 className="product-title">{item.title}</h5>
              <p className="product-brand">Football Wears</p>
              <p className="product-pricing">
                <span className="original-price">{item.originalPrice}</span>
                <span className="sale-price">
                  From {item.sellingPrice}
                </span>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
