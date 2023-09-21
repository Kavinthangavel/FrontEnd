// store.js
import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import userReducer from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer, // Add other reducers as needed
  },
});

export default store;
