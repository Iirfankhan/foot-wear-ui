import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dateOfBirth: "",
    address: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/adduser",
        formData
      );
      setMessage("User added successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(`Error: ${error.response.data}`);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Add New User</h2>
      {message && (
        <p style={{ color: message.startsWith("Error") ? "red" : "green" }}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Father's Name:
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="3"
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            ></textarea>
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
// import axios from 'axios'
// import React, { useEffect } from 'react'

// const AddUser = () => {
//   useEffect(()=>{
//     axios
//       .post("http://localhost:3001/api/adduser", {
//         name: "Maaz khan",
//         fatherName: "Bahadar khan",
//         dateOfBirth: "1990-01-15",
//         address: "123 Main Street, Springfield, IL",
//         gender: "Male",
//       })
//       .then((res) => {
//         console.log(res);
//       });
//   })
//   return (
//     <div>AddUser</div>
//   )
// }

// export default AddUser
