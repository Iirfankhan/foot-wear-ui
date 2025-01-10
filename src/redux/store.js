import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import authReducer from "./loginRedux"; // Import the authSlice

export default configureStore({
  reducer: {
    cart: cartReducer, // Existing cart state
    auth: authReducer, // New auth state
  },
});
