import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Grid, Typography, TextField, Button, Tabs, Tab, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router'
import { fetchCategories, fetchPricing, fetchStatus, createCourse } from "../../features/courseCreateSlice";
import { useDispatch, useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";




function Create() {


    const token = useSelector((state) => state.auth.token);



    const categories = useSelector((state) => state.courseCreate.categories);
    const pricing = useSelector((state) => state.courseCreate.pricing);
    const statusofthecourse = useSelector((state) => state.courseCreate.statuses);

    const course_id = useSelector((state) => state.courseCreate.course_id);


    console.log("cccourse", course_id)

    const [videoFile, setVideoFile] = useState(null);
    const [isUploading, setIsUploading] = useState(false);

    const [lessontitle, setLessonTitle] = useState('');
    const [lessonDesc, setLessonDesc] = useState('');



    let jwtToken = token && token.replace(/"/g, '');

    let courseId = course_id && course_id.replace(/"/g, '');



    const handleVideoUpload = async (e) => {
        const file = e.target.files[0];
        setVideoFile(file);

        const formData = new FormData();
        formData.append('data', videoFile);
        try {
            const response = await axios.post(`/api/v1/upload_video/${courseId}/${lessontitle}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });

            // if (response.status >= 200 && response.status < 300) {
            //     // Response is successful
            //     console.log("-->",response.data);
            //     console.log("-->",response.status);


            // }
            console.log(response.data);

        } catch (error) {
            console.error(error);

        }
    };

    console.log("cat", statusofthecourse)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchPricing());
        dispatch(fetchStatus());
    }, [dispatch]);



    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priceOption, setPriceOption] = useState('free');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [duration, setDuration] = useState('');
    const [values, setValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);

    };



    const handleLesson = async (e) => {

    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("course", category)

        // const loadingToastId = toast.loading('Creating...');

        try {
            await dispatch(createCourse({ title, description, price, category, status, duration }));


            setTitle("")
            setDescription("")
            setCategory("")
            setPrice("")
            setStatus("")
            setDuration("")

        } catch (err) {

            console.log(err)
        }
    };

    return (
        <div className='mt-[100px]'>
            <Toaster />

            <div>
                <Head>
                    <title>Create Course</title>
                </Head>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" className="font-bold mb-4">
                        Create Your Course
                    </Typography>
                    <Tabs value={values} onChange={handleTabChange}>
                        <Tab label="Create Course" />
                        <Tab label="Add Lessons" />
                    </Tabs>
                    <Box sx={{ p: 3 }}>
                        {values === 0 && (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    id="title"
                                    label="Title"
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    margin="normal"
                                />
                                <TextField
                                    id="description"
                                    label="Description"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    margin="normal"
                                />
                                <TextField
                                    id="duration"
                                    label="Duration"
                                    fullWidth
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    margin="normal"
                                />
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="price-label">Price</InputLabel>
                                    <Select
                                        labelId="price-label"
                                        id="price"
                                        value={priceOption}
                                        onChange={(e) => setPriceOption(e.target.value)}
                                    >
                                        <MenuItem value="free">Free</MenuItem>
                                        <MenuItem value="paid">Paid</MenuItem>
                                    </Select>
                                </FormControl>
                                {priceOption === 'paid' && (


                                    <Select
                                        labelId="category-label"
                                        id="category"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    >

                                        {pricing.map((rate) => (

                                            <MenuItem value={rate.id}>{rate.price}</MenuItem>


                                        ))}


                                    </Select>
                                )}
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="category-label">Category</InputLabel>

                                    <Select
                                        labelId="category-label"
                                        id="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >

                                        {categories.map((category) => (

                                            <MenuItem value={category.id}>{category.name}</MenuItem>


                                        ))}


                                    </Select>
                                </FormControl>

                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="category-label">Status</InputLabel>

                                    <Select
                                        labelId="category-label"
                                        id="category"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >

                                        {statusofthecourse.map((s) => (

                                            <MenuItem value={s.id}>{s.name}</MenuItem>


                                        ))}


                                    </Select>
                                </FormControl>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className='bg-primary mt-[10px] mb-[30px]'
                                    color="primary"
                                    endIcon={<ArrowForward />}
                                    fullWidth
                                >
                                    Create Course
                                </Button>
                            </form>
                        )}
                        {values === 1 && (
                            <>
                                <Typography variant="body1" align="center">
                                    Add lessons here
                                </Typography>

                                <form onSubmit={handleLesson}>
                                    <TextField
                                        id="title"
                                        label="Title"
                                        fullWidth
                                        value={lessontitle}
                                        onChange={(e) => setLessonTitle(e.target.value)}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="description"
                                        label="Description"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        value={lessonDesc}
                                        onChange={(e) => setLessonDesc(e.target.value)}
                                        margin="normal"
                                    />



                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="video-file" className="text-lg font-medium text-gray-800">
                                            Upload Video
                                        </label>
                                        <input
                                            type="file"
                                            id="video-file"
                                            accept="video/*"
                                            required
                                            onChange={handleVideoUpload}
                                            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {isUploading && (
                                        <div className="flex items-center justify-center w-full h-24">
                                            <CircularProgress size={32} color="primary" />
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        className='bg-primary mt-[10px] mb-[30px]'
                                        color="primary"
                                        endIcon={<ArrowForward />}
                                        fullWidth
                                    >
                                        Add Lesson
                                    </Button>
                                </form>



                            </>

                        )}
                    </Box>
                </Container>
            </div>
        </div>
    )
}

export default Create