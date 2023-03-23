import React, { useState, useEffect, useRef } from 'react'
import { TextField, Button } from '@mui/material';
import Image from 'next/image';
import { Box, Container, Tabs, Tab } from '@mui/material';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { Grid, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Avatar, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';




function SignupComponent() {





    const [activeTab, setActiveTab] = useState(0);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(true);
    const [jwt, setJwt] = useState("");

    // form
    const [gender, setGender] = React.useState('male');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('https://cdn.pixabay.com/photo/2022/09/17/13/33/garden-7460988__340.jpg');


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, [])

    //file

    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            setAvatarUrl(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    const handleEditClick = () => {
        inputRef.current.click();
    };

    //


    const isPasswordValid = password.length >= 6;
    const isPhoneValid = /^\d{10}$/.test(phone);

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    function handleEmailChange(e) {
        setEmail(e.target.value);

    }

    function handleOtpChange(e) {
        setOtp(e.target.value);

    }

    const handleEmailSubmit = async (e) => {


        const loadingToastId = toast.loading('Submitting email...');
        try {
            const { data } = await axios.post(
                `/api/signup`, {

                Mail: email

            },);

            // if()
            toast.dismiss(loadingToastId);
            toast.success(data.Message);

            setActiveTab((prevIndex) => prevIndex + 1);

            console.log(data)
        } catch (err) {

            toast.dismiss(loadingToastId);
            toast.error(err.response.data.Error || err.response.data.status );

            console.log(err)
        }

        console.log(email)



    }

    const handleOtpSubmit = async () => {

        const loadingToastId = toast.loading('Submitting OTP...');


        try {
            const { data } = await axios.post(
                `/api/verify_otp`, {

                Mail: email,
                otp: otp

            },);

            toast.dismiss(loadingToastId);
            toast.success("Verified");

            setJwt(data.Message)
            setActiveTab((prevIndex) => prevIndex + 1);

            console.log("-->", data.Message)

        } catch (err) {

            toast.dismiss(loadingToastId);

            toast.error(err.response.data.Error || err.response.data.status );
            // setActiveTab((prevIndex) => prevIndex + 1);

            console.log("-->", err)
        }

    }


    const handleFormSubmit = async () => {

        console.log("form", fname, lname, phone, password, email, gender, avatarUrl)

        const loadingToastId = toast.loading('Registering...');


        try {
            const { data } = await axios.post(
                `/api/register`, {
                firstname: fname,
                lastname: lname,
                Mail: email,
                password: password,
                phone: phone,
                gender: gender,
                avatar: avatarUrl

            },
                { headers: { Authorization: 'Bearer ' + jwt } }
            );

            toast.dismiss(loadingToastId);
            toast.success(data.Message);


        } catch (err) {

            toast.dismiss(loadingToastId);
            toast.error(err.response.data.Error || err.response.data.status );

            console.log(err)
        }

    }

    const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];

    function handleTabChange(event, newValue) {
        setActiveTab(newValue);

        setActiveTab((prevIndex) => prevIndex + 1);


    }

    const styles = {
        tabs: {
            marginBottom: '-50px',
        },
        tab: {
            textTransform: 'none',
            minWidth: 72,
            fontWeight: 600,
            marginRight: '2rem',
        },
    };


    return (

        <div className="flex flex-col lg:flex-row">

            <div className="hidden lg:block  lg:h-screen flex justify-center items-center">

                <Toaster />


                <Box
                    sx={{
                        backgroundImage: `url('https://res.cloudinary.com/ddap9cqvo/image/upload/v1679042408/samsung-uk-SH5Stmpf5OQ-unsplash_csa8za.jpg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50%',
                        backgroundSize: 'cover',
                        minHeight: '100vh',
                        display: 'flex',
                        objectPosition: 'center',
                        objectFit: 'cover',
                        width: '420px',
                        alignItems: 'center',
                    }}


                >
                    {loading ? (
                        <Skeleton variant="rectangular" animation="wave" width="420px" height="100%" />
                    ) : null}

                    <img
                        src="https://res.cloudinary.com/ddap9cqvo/image/upload/v1678911944/atul-vinayak-J1t1FY__6EI-unsplash_ihmk92.jpg"
                        alt="background"
                        style={{ display: 'none' }}
                        onLoad={handleImageLoad}
                    />
                </Box>


            </div>

            <div className="lg:w-[70%] flex  justify-center items-center  mt-[50px] lg:mt-[-50px]">


                <Box className="w-full max-w-md">

                    <div className='pb-[40px]'>
                        <h2 className="text-[24px] font-semibold">Get started a new journey</h2>
                        <p className='text-[rgba(19,20,49,.6)] text-[15px]'>Signup</p>
                    </div>

                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        sx={styles.tabs}
                    >
                        {/* {tabLabels.map((label) => (
                            <Tab label={label} key={label} sx={styles.tab} />
                        ))} */}
                    </Tabs>
                    {activeTab === 0 && (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleEmailSubmit();
                        }}>
                            <div className="mb-6">
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    size="small"
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <Button variant="contained" type='submit' fullWidth className='bg-primary rounded-[50px] h-[40px]'>
                                Signup
                            </Button>
                        </form>
                    )}
                    {activeTab === 1 &&
                        <Box>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleOtpSubmit();
                            }}>
                                <div className="mb-6">
                                    <TextField
                                        id="email"
                                        label="OTP"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleOtpChange}
                                        required
                                        size="small"
                                    />
                                </div>
                                <Button variant="contained" type='submit' fullWidth className='bg-primary rounded-[50px] h-[40px]'>
                                    Verify
                                </Button>
                            </form>


                        </Box>}
                    {activeTab === 2 && <Box>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit();
                        }}>

                            <div className="mb-6 flex justify-center">
                                <div className="relative inline-block">

                                    <label htmlFor="avatar-input">

                                        <Avatar
                                            alt="User Avatar"
                                            src={avatarUrl}
                                            className="w-[60px] h-[60px] rounded-full object-cover"
                                        />

                                        <input
                                            type="file"
                                            id="avatar-input"
                                            ref={inputRef}
                                            className="hidden"
                                            onChange={handleInputChange}
                                        />

                                    </label>

                                    <button className="absolute bottom-0 right-0  bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none" onClick={handleEditClick}
                                    >
                                        <EditIcon className="text-gray-600" />
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <TextField
                                    id="fname"
                                    label="First Name"
                                    variant="outlined"
                                    onChange={(e) => setFname(e.target.value)}
                                    value={fname}
                                    fullWidth
                                    size="small"
                                />
                            </div>

                            <div className="mb-6">
                                <TextField
                                    id="lname"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    onChange={(e) => setLname(e.target.value)}
                                    value={lname}
                                    size="small"
                                />
                            </div>

                            <div className="mb-6">
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    defaultValue={email}
                                    disabled
                                    size="small"
                                />
                            </div>

                            <div className="mb-6">
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth
                                    type="password"
                                    size="small"
                                    error={!isPasswordValid}
                                    helperText={
                                        !isPasswordValid && 'Password must be at least 6 characters long'
                                    }
                                />
                            </div>


                            <div className="mb-6">
                                <TextField
                                    id="phone"
                                    label="Phone"
                                    variant="outlined"
                                    fullWidth
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    size="small"
                                // error={!isPhoneValid}
                                // helperText={!isPhoneValid && 'Phone number must be 10 digits long'}
                                />
                            </div>


                            <div className="mb-6 flex justify-center">


                                <RadioGroup value={gender} onChange={handleChange} className="block ">
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                                {/* </Box> */}
                            </div>


                            <Button variant="contained" type='submit' fullWidth className='bg-primary rounded-[50px] h-[40px]'>
                                Register
                            </Button>
                        </form>

                    </Box>}
                </Box>
            </div>
        </div>
    )
}

export default SignupComponent