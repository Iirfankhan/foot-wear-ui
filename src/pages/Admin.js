import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Admin.css"; // Custom CSS for styling

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    originalPrice: "",
    sellingPrice: "",
    category: "",
    size: [],
    sleeve: [],
  });
  const [editingProductId, setEditingProductId] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Add or update a product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProductId) {
        // Update product
        await axios.put(
          `http://localhost:3001/api/product/${editingProductId}`,
          formData
        );
        setEditingProductId(null);
      } else {
        // Add new product
        await axios.post("http://localhost:3001/api/product", formData);
      }
      setFormData({
        title: "",
        img: "",
        originalPrice: "",
        sellingPrice: "",
        category: "",
        size: [],
        sleeve: [],
      });
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };
  

  // Delete a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/product/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Edit a product
  const handleEdit = (product) => {
    setFormData(product);
    setEditingProductId(product._id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.img}
          onChange={(e) => setFormData({ ...formData, img: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Original Price"
          value={formData.originalPrice}
          onChange={(e) =>
            setFormData({ ...formData, originalPrice: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Selling Price"
          value={formData.sellingPrice}
          onChange={(e) =>
            setFormData({ ...formData, sellingPrice: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Size"
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Sleeve"
          value={formData.sleeve}
          onChange={(e) => setFormData({ ...formData, sleeve: e.target.value })}
          required
        />
        <button type="submit">
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="product-list">
        <h2>Product List</h2>
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Original Price: Rs{product.originalPrice}</p>
            <p>Selling Price: Rs{product.sellingPrice}</p>
            <p>Category: {product.category}</p>
            <p>Size: {product.size}</p>
            <p>Sleeve: {product.sleeve}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
