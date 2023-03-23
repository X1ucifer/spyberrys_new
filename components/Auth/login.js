import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import Link from "next/link";
import Skeleton from '@mui/material/Skeleton';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authSlice';



function LoginComponent() {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
        dispatch(login({ email, password }));
    };

    return (

        <div className="flex flex-col lg:flex-row">






            <div className="hidden lg:block  lg:h-screen flex justify-center items-center">
                {loading ? (
                    <Skeleton variant="rectangular" animation="wave" width="420px" height="100%" />
                ) : (
                    <Box
                        sx={{
                            backgroundImage: `url('https://res.cloudinary.com/ddap9cqvo/image/upload/v1678774858/sincerely-media-7wS6xXqqfws-unsplash_hxoviq.jpg')`,
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
                        {/* <h1>hi</h1> */}
                    </Box>
                )}

            </div>

            <div className="lg:w-[70%] flex  justify-center items-center  mt-[200px] lg:mt-[-50px]">
                <form className="w-full max-w-md " onSubmit={handleSubmit}>

                    <div className='pb-[40px]'>
                        <h2 className="text-[24px] font-semibold">Get started a new journey</h2>
                        <p className='text-[rgba(19,20,49,.6)] text-[15px]'>Login</p>
                    </div>


                    <div className="mb-6" >
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            size="small"
                        />
                    </div>
                    <div className="mb-5">
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            size="small"
                        />
                    </div>

                    <div className='float-right mb-5'>
                        <p className='text-[13px] '>Don't Have an Account?
                            <Link href="/signup" legacyBehavior>
                                <a className='ml-[5px] text-primary cursor-pointer hover:text-blue-400'>Signup</a>
                            </Link>
                        </p>
                    </div>

                    <div>
                        <p className='text-[13px]'> <a className='text-primary cursor-pointer'>Forget Password</a></p>
                    </div>
                    <Button variant="contained" type="submit" fullWidth className='bg-primary rounded-[50px] h-[40px]'>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent