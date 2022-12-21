import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    // putting/injecting data into slice
    login: (state, action) => {
      state.user = action.payload;
    },

    // removing data from slice
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// exporting user data
export const selectUser = (state) => state.user?.user;
 
export default userSlice.reducer;
