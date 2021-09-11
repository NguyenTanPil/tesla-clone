import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
  products: data,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducer: {},
});

export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
