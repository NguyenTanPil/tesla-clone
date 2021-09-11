import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../features/car/carSlice';
import productSlice from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    car: carSlice,
    product: productSlice,
  },
});
