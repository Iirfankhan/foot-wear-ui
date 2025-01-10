import React, { useState } from "react";
import "../styles/CheckOut.css";
import { useSelector } from "react-redux";
const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

   const cart = useSelector((state) => state.cart);

  return (
    <div className="checkout-container">
      {/* User Information Section */}
      <div className="checkout-left">
        <h2>Checkout</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              placeholder="Enter your shipping address"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === "creditCard"}
                  onChange={handlePaymentChange}
                />
                Credit Card
              </label>

              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={paymentMethod === "cashOnDelivery"}
                  onChange={handlePaymentChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
        </form>
      </div>

      {/* Summary Section */}

      <div className="checkout-summary">
        {cart.products.map((item) => (
          <div key={item} className=" check-data">
            <img src={item.img} alt="product" className="product-img" />
            <p>{item.title}</p>
            <p>
              Rs.
              {parseFloat(
                item.sellingPrice
                  .replace(/[^0-9.]/g, "")
                  .replace(/\.(?=.*\.)/g, "")
              ) * item.quantity}
            </p>
          </div>
        ))}
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>
            Items Total: <span>{cart.quantity}</span>
          </p>
          <p>
            Shipping Fee: <span>Rs.0.00</span>
          </p>
          <p>
            <strong>
              Total: <span>Rs.{cart.total}</span>
            </strong>
          </p>
        </div>
        <button
          type="submit"
          className="place-order-btn"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
