import { configureStore } from '@reduxjs/toolkit';
import retailSalesReducer from '../features/retailSales/retailSalesSlice';

export const store = configureStore({
  reducer: {
    retailSales: retailSalesReducer,
  },
});
