import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const price = parseFloat(
        action.payload.sellingPrice
          .replace(/[^0-9.]/g, "") // Remove non-numeric characters except "."
          .replace(/\.(?=.*\.)/g, "") // Prevent multiple dots
      );

      const qty = action.payload.quantity || 0;

      state.quantity += 1;
      state.products.push(action.payload);
      state.total += price * qty;
    },
    removeProduct: (state, action) => {
      const productId = action.payload.id;

      const productIndex = state.products.findIndex(
        (product) => product._id === productId
      );

      if (productIndex > -1) {
        const removedProduct = state.products[productIndex];

        const price = parseFloat(
          removedProduct.sellingPrice
            .replace(/[^0-9.]/g, "")
            .replace(/\.(?=.*\.)/g, "")
        );
        const qty = removedProduct.quantity || 0;

        // Update total and quantity
        state.total -= price * qty;
        state.quantity -= 1;

        // Remove the product
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
