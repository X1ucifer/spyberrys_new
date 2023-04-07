import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import Link from "next/link";
import Skeleton from '@mui/material/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { becomeInstructor, fetchUser } from '../../features/authSlice';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';


function Form() {

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    const isBecomingInstructor = useSelector(state => state.auth.isBecomingInstructor);


    console.log("op", user)


    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(user && user.phone);

    const [value, setValue] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("opppp", value.$d, phone)

        try {
            const response = await dispatch(becomeInstructor({ value, phone })).then(() => {
                dispatch(fetchUser());
                router.push('/');
            });
        } catch (err) {

            console.log(err)

        }


    };




    return (





        <div className=" flex  justify-center items-center  mt-[200px] ">

            <Toaster />

            <form className="w-full max-w-md " onSubmit={handleSubmit}>

                <div className='pb-[40px]'>
                    <h2 className="text-[24px] font-semibold">Get started a new journey</h2>
                    <p className='text-[rgba(19,20,49,.6)] text-[15px]'>Become an Instructor</p>
                </div>


                <div className="mb-6" >
                    <TextField
                        id="text"
                        label="First name"
                        variant="outlined"
                        fullWidth
                        defaultValue={user && user.firstname}
                        disabled
                        size="small"
                    />
                </div>

                <div className="mb-5" >
                    <TextField
                        id="text"
                        label="Last name"
                        variant="outlined"
                        fullWidth
                        defaultValue={user && user.lastname}
                        disabled
                        size="small"
                    />
                </div>


                <div className="mb-5">
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        defaultValue={user && user.mail}
                        disabled
                        size="small"
                    />
                </div>

                <div className="mb-5">
                    <TextField
                        id="Phone"
                        label="Phone"
                        type="phone"
                        variant="outlined"
                        fullWidth
                        defaultValue={user && user.phone}
                        disabled
                        size="small"
                    />
                </div>

                <div className="mb-5">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date of birth"
                            value={value}
                            className='w-[100%]'
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    InputLabelProps={{ shrink: true }} // add this prop
                                    InputProps={{ notched: false }} // add this prop
                                />
                            )}
                            InputLabelProps={{ shrink: true }} // add this prop
                        />
                    </LocalizationProvider>
                </div>


                <Button variant="contained" type="submit" fullWidth className='bg-primary rounded-[50px] h-[40px]'>
                    Become an Instructor
                </Button>
            </form>
        </div>

    )
}

export default Form