import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {
  useEffect(()=>{
   


// const token = localStorage.getItem("token");

axios
  .get("http://localhost:3001/api/user/login", {
    headers: {
      auth_token: localStorage.getItem("token"), // Send the token in the Authorization header
      
    },
  })
  .then((response) => {
    console.log("Response from server:", response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  },[])

  return (
    <div>
      <h2>Logout</h2>
      <ToastContainer />
    </div>
  );
};

export default Logout;
