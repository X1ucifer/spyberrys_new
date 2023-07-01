import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Message } from '@mui/icons-material';
import Cookies from 'js-cookie';






export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {

  // const dispatch = useDispatch();


  try {
    console.log("redux", userData)
    const { data } = await axios.post(
      `/api/v1/auth/login`, {

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
    const response = await axios.get('/api/v1/auth/get_user', {
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


export const becomeInstructor = createAsyncThunk(
  'auth/becomeInstructor',
  async (teacherData, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    console.log("redux teacher", token)
    try {
      const response = await axios.post('/api/v1/auth/make_instructor', {

        phone: teacherData.phone,
        dateofbirth: teacherData.value.$d

      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const instructorToken = response.data.Message;
      Cookies.set('instructorToken', instructorToken);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



export const setToken = createAction('auth/setToken');



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
    token: Cookies.get('token') ? Cookies.get('token') : null,
    error: null,
    isLoading: false,
    isBecomingInstructor: false,
    isLoggedin: Boolean(Cookies.get('user')) || false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
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
      })
      .addCase(becomeInstructor.pending, (state,action) => {
        state.isBecomingInstructor = false;
        // toast.error(state)
        state.error = null;
      })
      .addCase(becomeInstructor.fulfilled, (state, action) => {
        state.token = action.payload.Message;
        state.isBecomingInstructor = true;
        toast.success("Welcome");

      })
      .addCase(becomeInstructor.rejected, (state, action) => {
        state.isBecomingInstructor = false;
        state.error = action.payload;
        toast.error(state.error && state.error.message || state.error && state.error.Error)

      });
  },
});

export default authSlice.reducer;
