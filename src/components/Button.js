// Button.js
import React from "react";
import "../styles/Button.css";

const Button = ({
  label,
  onClick,
  type = "primary",
  size = "medium",
  disabled = false,
}) => {
  return (
    <div>
    <button
      className={`btnn btn-${type} btn-${size} ${
        disabled ? "btn-disabled" : ""
      }`}
      onClick={!disabled ? onClick : null}
      disabled={disabled}
    >
      {label}
    </button>
    </div>
  );
};

export default Button;
