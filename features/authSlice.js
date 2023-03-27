import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Message } from '@mui/icons-material';
import Cookies from 'js-cookie';






export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {

  // const dispatch = useDispatch();


  try {
    console.log("redux", userData)
    const { data } = await axios.post(
      `/api/login`, {

      Mail: userData.email,
      password: userData.password

    },);

    // localStorage.setItem('token', data.Message);
    Cookies.set('token', JSON.stringify(data.Message), { expires: 1 }); 


    // router.push('/')
    console.log("-->", data.Message)
    return data;
  } catch (error) {
    console.log("error", error)
    return thunkAPI.rejectWithValue(error.response.data);
  }
});


export const fetchUser = createAsyncThunk('user/fetch', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  try {
    const response = await axios.get('/api/get_user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Cookies.set('user', JSON.stringify(response.data.Message), { expires: 1 }); // expires in 1 day
console.log("user yur", response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});









const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    token: Cookies.get('token') ? Cookies.get('token') : null,
    error: null,
    isLoading: false,
    isLoggedin: Boolean(Cookies.get('token')),
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.Message;
        state.isLoading = false;
        state.error = null;
        toast.success("Welcome");

      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        toast.error(state.error && state.error.Message);
        console.log("reduc", state.error)
      })
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isLoggedin = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.Message;
        state.isLoading = false;
        state.isLoggedin = true;
        state.error = null;
        console.log("user", state.user)
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isLoggedin = false;
        toast.error(state.error.Message)
      });
  },
});

export default authSlice.reducer;
