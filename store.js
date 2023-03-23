import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  // Add other reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
  // Add middleware and other store options here if needed
});

export default store;
