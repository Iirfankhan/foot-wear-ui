import React, { useState } from "react";
import axios from "axios";

const SearchUser = () => {
  const [searchParams, setSearchParams] = useState({
    name: "",
    fatherName: "",
    gender: "",
  });
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  // Handle input change for search fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  // Handle the search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://localhost:3001/api/adduser/search",
        {
          params: searchParams, // Send query parameters
        }
      );
      if (response.data.length === 0) {
        setMessage("No users found for the given search criteria.");
        setResults([]);
      } else {
        setMessage("");
        setResults(response.data);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setMessage("An error occurred while searching. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Search Users</h2>
      {message && (
        <p style={{ color: message.includes("error") ? "red" : "blue" }}>
          {message}
        </p>
      )}
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={searchParams.name}
              onChange={handleInputChange}
              placeholder="Enter name"
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
              value={searchParams.fatherName}
              onChange={handleInputChange}
              placeholder="Enter father's name"
              style={{ width: "100%", padding: "8px", margin: "5px 0" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Gender:
            <select
              name="gender"
              value={searchParams.gender}
              onChange={handleInputChange}
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
          Search
        </button>
      </form>

      {/* Display Results */}
      <div>
        {results.length > 0 && (
          <div>
            <h3>Search Results:</h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
              }}
            >
              <thead>
                <tr>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Father's Name
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Gender
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Date of Birth
                  </th>
                  <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((user) => (
                  <tr key={user._id}>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.name}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.fatherName}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.gender}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.dateOfBirth}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUser;
