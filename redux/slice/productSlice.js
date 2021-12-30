import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    checkoutList: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.productList.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.productList = state.productList.filter((item) => item.id !== { payload });
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
