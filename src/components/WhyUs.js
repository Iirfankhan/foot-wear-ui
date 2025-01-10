import React from "react";
import "../styles//Why.css";

const WhyUs = () => {
  return (
    <div className="why-wrapper container-fluid">
      <div className="row justify-content-center">
        <div className="why-title col-12 text-center mb-4">
          <h1>Why Us?</h1>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <div className="why-card">
            <img
              src="https://alnoorsports.com/cdn/shop/files/1000200260.jpg?v=1698870404&width=1420"
              alt="Premium Quality Products"
            />
            <h3>PREMIUM QUALITY PRODUCTS</h3>
            <p>
              Discover excellence in every product – we offer premium quality
              items.
            </p>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <div className="why-card">
            <img
              src="https://alnoorsports.com/cdn/shop/files/1000200257_6bd6611c-7aa8-49ce-92bc-08586058412a.jpg?v=1698870588&width=1420"
              alt="Embroidered Logo"
            />
            <h3>EMBROIDERED LOGO</h3>
            <p>
              Our football shirts feature beautifully embroidered logos and
              badges, adding a touch of excellence to your attire.
            </p>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <div className="why-card">
            <img
              src="https://alnoorsports.com/cdn/shop/files/1000200259.jpg?v=1698870759&width=1420"
              alt="Easy Returns"
            />
            <h3>Easy Returns</h3>
            <p>
              Our store's easy return policy ensures hassle-free returns, making
              customer satisfaction our top priority. Shop with confidence!
            </p>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <div className="why-card">
            <img
              src="https://alnoorsports.com/cdn/shop/files/1000202928.png?v=1698871506&width=1420"
              alt="First Check Then Pay"
            />
            <h3>First Check Then Pay</h3>
            <p>
              Order with confidence: First check, then pay upon delivery. Your
              satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
