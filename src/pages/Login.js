import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

import "../styles/Register.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { login } from "../redux/loginRedux";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();
 const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        {
          email: email,
          password: password,
        }
      );

      const userData = {
        token: response.headers.auth_token,
        user: response.data.user,
      };

      // Store token in localStorage
      // localStorage.setItem("token", userData.token);

      // Dispatch login action
      dispatch(login(userData));

      toast.success("Logged in successfully!");
      if (response.data.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred!";
      toast.error(errorMessage);
    }
  };

  


  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Login Here</h2>

          <form onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Your Email"
              size="lg"
              id="form2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              size="lg"
              id="form3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBBtn
              type="submit"
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
            >
              Login
            </MDBBtn>
          </form>

          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Sign up here
              </Link>
            </p>
          </div>
        </MDBCardBody>
      </MDBCard>
      {/* Toast Container for Notifications */}
      <ToastContainer />
    </MDBContainer>
  );
}

export default Login;
