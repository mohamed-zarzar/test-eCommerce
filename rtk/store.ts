import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApiInjectEndpoint } from "./features/apiReducerSlice";

import cartListReducerSlice from './features/cartListReducerSlice';

const store = configureStore({
    reducer: {
      [productApiInjectEndpoint.reducerPath]: productApiInjectEndpoint.reducer,
    listOfcarts : cartListReducerSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApiInjectEndpoint.middleware),
  })





setupListeners(store.dispatch)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch