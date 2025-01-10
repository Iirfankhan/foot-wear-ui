import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/Quantity.css";

const Quantity = ({onQuantityChange}) => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity); // Notify parent of new quantity
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity); // Notify parent of new quantity
    }
  }
  // const increment = () => {
  //   setQuantity(quantity + 1); // Increment quantity
  // };

  // const decrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1); // Decrement quantity
  //   }
  // };

  return (
    <div>
      <p>Quantity</p>
      <div className="quantity">
        <span onClick={increment}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span>{quantity}</span>
        <span onClick={decrement} className={quantity === 1 ? "disabled" : ""}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
      </div>
    </div>
  );
};

export default Quantity;
