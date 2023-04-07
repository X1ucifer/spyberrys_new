import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';


export const createCourse = createAsyncThunk(
    'courses/createCourse',
    async (courseData, thunkAPI) => {

   
        let jwtToken = thunkAPI.getState().auth.token.replace(/"/g, '');


        try {
            const { data } = await axios.post(
                `/api/v1/create_course`, {

                courseName: courseData.title,
                description: courseData.description,
                price: courseData.price,
                category_id: courseData.category,
                status: courseData.status,
                duration: courseData.duration,


            }, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }
            );

            Cookies.set('course_id', JSON.stringify(data.Message), { expires: 1 });



            // console.log("oo",data.Message)
            return data;

        } catch (error) {

            return thunkAPI.rejectWithValue(error.response.data);

        }

    }
);


export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        try {
            const { data } = await axios.get(
                `/api/v1/get_category`, {

            }
            );


            console.log(data)

            return data.Message;

        } catch (error) {

            return thunkAPI.rejectWithValue(error.response.data);

        }
    },
);


//pricing
export const fetchPricing = createAsyncThunk(
    'pricing/fetchPricing',
    async () => {
        try {
            const { data } = await axios.get(
                `/api/v1/get_pricing`, {

            }
            );


            console.log(data)

            return data.Message;

        } catch (error) {

            return thunkAPI.rejectWithValue(error.response.data);

        }
    },
);


//status

export const fetchStatus = createAsyncThunk(
    'staus/fetchStatus',
    async () => {
        try {
            const { data } = await axios.get(
                `/api/v1/get_status`, {

            }
            );


            console.log(data)

            return data.Message;

        } catch (error) {

            return thunkAPI.rejectWithValue(error.response.data);

        }
    },
);


const coursesCreateSlice = createSlice({
    name: 'coursesCreate',
    initialState: {
        course_id: Cookies.get('course_id') ? Cookies.get('course_id') : null,
        isLoading: false,
        categories: [],
        pricing: [],
        statuses: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createCourse.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createCourse.fulfilled, (state, action) => {
                console.log("cc", action.payload)
                state.course_id = action.payload;
                state.isLoading = false;
                toast.success("Course Created");

            })
            .addCase(createCourse.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                toast.error(state.error && state.error.Message);
            })
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchPricing.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchPricing.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.pricing = action.payload;
            })
            .addCase(fetchPricing.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchStatus.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchStatus.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.statuses = action.payload;
            })
            .addCase(fetchStatus.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });


    },
});

export default coursesCreateSlice.reducer;
