import React, { useEffect, useReducer, useState } from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import { MDBBadge } from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log(products)
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/product");
        setProducts(response.data); // Assuming the API returns an array of products
        console.log(products);
      } catch (err) {
       console.log(err)
      }
    };

    fetchProducts();
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

   

    const token = useSelector((state) => state.auth.token); // Redux selector for token

    useEffect(() => {
      setIsLoggedIn(!!token); // Update local state when token changes
    }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    closeMenu();
  };

  const quantity = useSelector((state) => state.cart.quantity);

  // Handle search input changes
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSuggestionClick = (productId) => {
    navigate(`/details/${productId}`);
    setSearchQuery("");
    setFilteredProducts([]);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "crimson",
          padding: "0.3rem",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Free Delivery Nationwide
        <FontAwesomeIcon icon={faShippingFast} style={{ marginLeft: "5px" }} />
      </div>

      <nav className="navbar">
        <div className="navbar-logo">
          <h1 className="logo-text">Football Wears</h1>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "#E53935" }}
            className="icon"
          />
          {filteredProducts.length > 0 && (
            <div className="search-suggestions">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(product._id)}
                >
                  <img src={product.img} />
                  {product.title.slice(0, 20)}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </NavLink>
          {isLoggedIn ? (
            <button className="btn btn-transparent" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
            >
              Login
            </button>
          )}
        </div>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className="cart-button">
          <NavLink className="mx-3" to="/cart" onClick={closeMenu}>
            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            <MDBBadge color="danger" notification pill>
              {quantity}
            </MDBBadge>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
