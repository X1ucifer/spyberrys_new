import React, { useEffect } from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { FaUserGraduate, FaChalkboardTeacher, FaLaptopCode } from 'react-icons/fa';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from "next/link";


const columns = [
    {
        icon: <FaUserGraduate className="text-3xl text-black  mb-2" />,
        title: 'Student Focused',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum metus auctor mauris gravida placerat. Nulla facilisi. Donec condimentum elit quis risus convallis, eu ultricies sapien pellentesque. ',
    },
    {
        icon: <FaChalkboardTeacher className="text-3xl text-black  mb-2" />,
        title: 'Expert Teachers',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum metus auctor mauris gravida placerat. Nulla facilisi. Donec condimentum elit quis risus convallis, eu ultricies sapien pellentesque. ',
    },
    {
        icon: <FaLaptopCode className="text-3xl 
        text-black mb-2" />,
        title: 'Practical Learning',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum metus auctor mauris gravida placerat. Nulla facilisi. Donec condimentum elit quis risus convallis, eu ultricies sapien pellentesque. ',
    },
];

function index() {

    const router = useRouter();
    const loggin = useSelector(state => state.auth.isLoggedin);


    const redirectToLogin = () => {
        router.push('/login');
    }

    useEffect(() => {
        if (!loggin) {
            redirectToLogin();
        }
    }, [loggin]);



    return (


        <div className='mt-[50px]'>

            {loggin ? (
                <>
                    <Box
                        className="bg-cover bg-center bg-no-repeat py-20"
                        style={{
                            backgroundImage: "url('https://res.cloudinary.com/ddap9cqvo/image/upload/v1672988981/nordwood-themes-kRNZiGKtz48-unsplash_qh6gld.jpg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            minHeight: '680px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Container maxWidth="xl">
                            <Box className="text-white text-left">
                                <Typography variant="h2" component="h1" sx={{ mb: 2 }} className='text-black font-medium'>
                                    Teach what you love on Spyberrys
                                </Typography>
                                <Typography variant="h5" component="p" sx={{ mb: 4 }} className='text-black'>
                                    Create engaging courses and reach millions of students worldwide
                                </Typography>

                                <Link href="/teach-on-spyberrys/become-an-instructor" legacyBehavior>
                                    <Button variant="contained" color="primary" className='bg-primary h-[50px]' sx={{ px: 8 }}>
                                        Start teaching today
                                    </Button>
                                </Link>
                            </Box>
                        </Container>



                    </Box>

                    <Container maxWidth="lg" sx={{ py: 8 }}>

                        <h1 className='text-center font-semibold text-[40px] mb-[80px]'>So many reasons to start</h1>
                        <Grid container spacing={6}>
                            {columns.map((col, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <div className="flex items-center mb-4">
                                        {col.icon}
                                        <Typography variant="h6" component="h2" sx={{ ml: 2 }}>
                                            {col.title}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        className={cx('text-gray-600', 'leading-7', 'h-44')}
                                    >
                                        {col.content}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </>
            ) : null}

        </div>
    )
}

export default index