import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
} from "mdb-react-ui-kit";

import "../styles/Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Register Component
function Register() {

  const [userName,setUserName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [confirmPassword,setConfirmPassword]=useState()
  
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

     axios
       .post("http://localhost:3001/api/user",{
        name:userName,
        email:email,
        password:password,
        repeat_password:confirmPassword
       })
       .then((response) => {
         console.log(response.data); // handle the response data
          toast.success("Logged in successfully!");
         navigate("/login");
       })
       .catch((error) => {
         console.error( error.response.data); // handle errors
       });

  }

  return (
    <>
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
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Your Name"
                size="lg"
                id="form1"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />

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
              <MDBInput
                wrapperClass="mb-4"
                label="Repeat your password"
                size="lg"
                id="form4"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {/* <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree to all statements in Terms of Service"
            />
          </div> */}
              <MDBBtn className="mb-4 w-100 gradient-custom-4" size="lg">
                Register
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
