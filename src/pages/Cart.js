
import "../styles/Cart.css";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/cartRedux";


const Cart = () => {
  
  const navigation = useNavigate()
  const cart = useSelector(state=>state.cart)
 
const dispatch = useDispatch();

const handleRemove = (productId) => {
  dispatch(removeProduct({ id: productId }));
};
   
  
  // console.log(cart)
  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <MDBTable align="middle" className="cart-table">
        <MDBTableHead light>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Item</th>
            <th scope="col">Name</th>
            <th scope="col">Size/Sleeve</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {cart.products.map((item, index) => (
            <tr key={index}>
              {/* Product Image */}
              <td>
                <img src={item.img} alt="product" className="product-img" />
              </td>

              {/* Product Title */}
              <td className="cart-ttle">{item.title}</td>
              <td>
                {item.activeSize}/{item.activeSleeve}
              </td>

              {/* Quantity Selector */}
              <td>{item.quantity}</td>

              {/* Total Price */}
              <td>
                Rs.
                {parseFloat(
                  item.sellingPrice
                    .replace(/[^0-9.]/g, "")
                    .replace(/\.(?=.*\.)/g, "")
                ) * item.quantity}
              </td>

              {/* Remove Button */}
              <td>
                <MDBBtn
                  color="danger"
                  size="sm"
                  className="remove-btn"
                  onClick={() => handleRemove(item._id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>
            Total Items: <span>{cart.quantity}</span>
          </p>
          <p>
            Total Price: <span>Rs. {cart.total}</span>
          </p>
        </div>
        <MDBBtn
          color="success"
          className="checkout-btn"
          onClick={() => navigation("/checkout")}
        >
          Proceed to Checkout
        </MDBBtn>
      </div>
    </div>
  );
};

export default Cart;
