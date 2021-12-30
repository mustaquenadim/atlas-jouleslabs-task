import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    profile: {},
  },
  reducers: {
    setUser: (state, payload) => {
      state.isAuthenticated = true;
      state.profile = payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
