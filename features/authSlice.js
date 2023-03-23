import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {

  try {
    console.log("redux", userData)
    const { data } = await axios.post(
      `/api/login`, {

      Mail: userData.email,
      password: userData.password

    },);
    console.log("-->", data)
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
