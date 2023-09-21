// userReducer.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // Initial user state
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    // Add other reducer actions as needed
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
