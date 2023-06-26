import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import * as React from 'react';
import { ArrowBack } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LikeButton from '../../components/Button/likebutton';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import { getCourses } from '../lib/api'
import { PlayArrow } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DevicesIcon from '@mui/icons-material/Devices';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Tooltip from '@mui/material/Tooltip';
import CourseSlider from '/components/Slider/courseSlider.js'

// import CourseSlider from '../components/Slider/courseSlider';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const CoursePreview = () => {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleAccordion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const router = useRouter()
  const { id } = router.query
  const [course, setCourse] = useState(null)

  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
  };

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   if (id) {
  //     getCourses().then((data) => {
  //       const course = data.find((item) => item.id === id)
  //       setCourse(course)
  //     })
  //   }
  // }, [id])

  // if (!course) {
  //   return (
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <Typography variant="h5" align="center">
  //         Loading...
  //       </Typography>
  //     </Box>
  //   )
  // }




  const courses = [
    {
      id: 1,
      title: 'Advanced SEO Strategies 2023 - Level Up Your SEO Knowledge',
      author: 'Author 1',
      rating: '4.5',
      price: '$19.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course1.jpg',
    },
    {
      id: 2,
      title: 'Start Your Own SEO Agency From Home - The Complete Blueprint',
      author: 'Author 2',
      rating: '4.8',
      price: '$29.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course2.jpg',
    },
    {
      id: 1,
      title: 'Advanced Crypto Trading COurse',
      author: 'Kralow',
      rating: '4.5',
      price: '$33.99',
      enrolledStudents: '78',
      category: 'Trading',
      imageSrc: '/images/course3.jpg',
    },
    {
      id: 2,
      title: 'Start Your Own SEO Agency From Home - The Complete Blueprint',
      author: 'Author 2',
      rating: '4.8',
      price: '$29.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course2.jpg',
    },
    {
      id: 2,
      title: 'Start Your Own SEO Agency From Home - The Complete Blueprint',
      author: 'Author 2',
      rating: '4.8',
      price: '$29.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course2.jpg',
    },
    {
      id: 1,
      title: 'Advanced SEO Strategies 2023 - Level Up Your SEO Knowledge',
      author: 'Author 1',
      rating: '4.5',
      price: '$19.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course1.jpg',
    },
    {
      id: 2,
      title: 'Start Your Own SEO Agency From Home - The Complete Blueprint',
      author: 'Author 2',
      rating: '4.8',
      price: '$29.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course2.jpg',
    },
    {
      id: 2,
      title: 'Start Your Own SEO Agency From Home - The Complete Blueprint',
      author: 'Author 2',
      rating: '4.8',
      price: '$29.99',
      enrolledStudents: '78',
      category: 'SEO',
      imageSrc: '/images/course2.jpg',
    },
  ];



  return (
    <>
      <Head>
        <title>make- Course Preview</title>
      </Head>
      <div >

        {/* hero section */}


        <section className='mb-10'>
          <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-[40rem]" >



            <div class=" flex flex-col items-start px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-20 dark:text-gray-900">
              <div className='mb-20'>
                <div role="presentation" onClick={handleClick}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center', }}
                      href="/"
                    >
                      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Home
                    </Link>
                    <Link
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                      color="white"
                      href="/"
                    >
                      <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Course
                    </Link>

                  </Breadcrumbs>
                </div>
              </div>

              {/* herotext */}

              <h1 class="max-w-lg text-4xl font-semibold leading-normal text-gray-900 dark:text-white text-start">Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]</h1>
              <p class="mt-5  text-lg sm:mb-4 max-w-lg dark:text-white text-start">Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.</p>
              <div class="flex items-center mb-3">

                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-5 h-5 text-black dark:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <p class="ml-2 text-sm font-medium text-gray-900 dark:text-black">4.95 out of 5</p>

              </div>
              <p class="mt-3 mb-8 text-lg sm:mb-12 max-w-lg dark:text-white text-start">Created by ........................</p>
            </div>
          </div>
        </section>



        {/* tabs */}



        <div className="flex justify-around " >

          <div class="basis-1/2">

            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" centered="true" >
                    <Tab label="What you'll learn" value="1" />
                    <Tab label="Ratings" value="2" />


                  </TabList>
                </Box>

                <TabPanel value="1">

                  <div class="max-w-[50rem] mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow bg-zinc-100 drop-shadow-xl ">

                    <div className='flex justify-around'>
                      <div>
                        <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-black">
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Individual configuration</span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold text-gray-900 dark:text-black">1 developer</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold text-gray-900 dark:text-black">1 developer</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-black">
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Individual configuration</span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold text-gray-900 dark:text-black">1 developer</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>No setup, or hidden fees</span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Team size: <span class="font-semibold text-gray-900 dark:text-black">1 developer</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Premium support: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                          <li class="flex items-center space-x-3">

                            <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            <span>Free updates: <span class="font-semibold text-gray-900 dark:text-black">6 months</span></span>
                          </li>
                        </ul>
                      </div>


                    </div>


                  </div>


                </TabPanel>






                {/* tab2 */}

                <TabPanel value="2">


                  <div class="max-w-[50rem] mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow bg-zinc-100 drop-shadow-xl ">

                    <div class="flex items-center mb-3">

                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      <p class="ml-2 text-sm font-medium text-gray-900 dark:text-black">4.95 out of 5</p>

                    </div>



                    <Stack direction="row" alignItems="center" gap={1} marginBottom={1} justifyContent={"end"}>
                      <AccessTimeIcon fontSize='small' color='action' />
                      <Typography variant="caption"> a month Ago</Typography>
                    </Stack>







                    <p class="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
                    <div class="flex items-center mt-4">
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div class="h-2 bg-yellow-400 rounded" style={{ width: "70%" }}></div>
                      </div>
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
                      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div class="h-2 bg-yellow-400 rounded" style={{ width: "17%" }}></div>
                      </div>
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
                      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div class="h-2 bg-yellow-400 rounded" style={{ width: "8%" }}></div>
                      </div>
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
                      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div class="h-2 bg-yellow-400 rounded" style={{ width: "4%" }}></div>
                      </div>
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
                    </div>
                    <div class="flex items-center mt-4">
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
                      <div class="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                        <div class="h-2 bg-yellow-400 rounded" style={{ width: "1%" }}></div>
                      </div>
                      <span class="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
                    </div>







                    <figure class="max-w-screen-md mt-10 ">
                      <figcaption class="flex items-center mt-6 space-x-3 mb-2">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture" />
                        <div class="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
                          <cite class="pr-3 font-medium text-gray-900 dark:text-black">Bonnie Green</cite>
                          <cite class="pl-3 text-sm text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
                        </div>
                      </figcaption>
                      <div class="flex items-center ">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                      </div>
                      <blockquote>
                        <p class="text-1xl text-gray-900 dark:text-black mt-2">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                      </blockquote>

                    </figure>

                    <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-300" />

                    <div class="text-end">
                      <a href="/" class="text-blue-600 visited:text-blue-600 ...">
                        See More
                      </a>
                    </div>



                  </div>


                </TabPanel>


              </TabContext>
            </Box>
          </div>





          {/* course buying Card */}



          <div class="basis-4/12">

            <div class="relative bottom-[18rem]  h-[60rem]  w-full max-w-[28rem] flex-col rounded-xl bg-white p-8 text-black ">
              <video class="w-full h-auto max-w-full" controls>
                <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-around " >
                <div>
                  <Typography variant="h4" component="h2" marginTop={3} fontWeight={"bold"}>
                    $49.76
                  </Typography>
                </div>

                <div>
                  <Typography variant="h6" component="h2" marginTop={3} color={"#808080"}>
                    50% Off
                  </Typography>
                </div>
              </div>


              <div className='flex justify-between items-end'>
                <div>
                  <a href="#_" class="mt-5  relative inline-flex items-end justify-center py-3 pl-4 pr-12 overflow-hidden font-semibold text-black-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg class="w-5 h-5 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Buy this Course</span>
                  </a>
                </div>

                <div >
                  {/* <Tooltip title="Like">
                <IconButton color="primary" aria-label="add to shopping cart" >
                    <FavoriteBorderIcon fontSize='large' color='error'/>
                  </IconButton>
                  </Tooltip> */}
                  <LikeButton />

                </div>

                <div>
                  <Tooltip title="Add to Cart">
                    <IconButton color="primary" aria-label="add to shopping cart">
                      <AddShoppingCartIcon fontSize='large' />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-400" />


              <div>
                <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                  This Course included
                </Typography>

                <Stack direction="row" alignItems="center" gap={1} marginBottom={1} >
                  < DevicesIcon fontSize='small' color='info' />
                  <Typography variant="body1"> Access on all devices</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" gap={1} marginBottom={1}>
                  < ArticleIcon fontSize='small' color='info' />
                  <Typography variant="body1">39 articles</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" gap={1} marginBottom={1}>
                  <OndemandVideoIcon fontSize='small' color='info' />
                  <Typography variant="body1">42 hours on-demand video</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" gap={1} marginBottom={2}>
                  < EmojiEventsIcon fontSize='small' color='info' />
                  <Typography variant="body1"> Certificate of completion</Typography>
                </Stack>


              </div>
              <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-400" />

              <div>
                <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                  Share this course
                </Typography>

                <div class="flex mt-4 space-x-6 sm:justify-around md:mt-0">
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Gift this Course
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    Apply coupon
                  </a>

                </div>


              </div>
              <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-400" />


              <div>
                <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                  Share this course
                </Typography>

                <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Facebook page</span>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Instagram page</span>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    <span class="sr-only">Twitter page</span>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">GitHub account</span>
                  </a>
                  <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                    <span class="sr-only">Dribbble account</span>
                  </a>
                </div>


              </div>
              <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-gray-400" />

            </div>

          </div>


        </div>




        {/* <div className="flex justify-around mt-[-20%]  max-w-full mt-10 p-6 bg-white   overflow-auto" > 


        <div class="basis-5/12"> */}
            <div class="max-w-full mt-[-18%]  p-6 bg-white overflow-auto">
            <Typography variant="h1" component="h1" marginTop={5} marginBottom={2} fontSize={30} fontWeight={'bold'} >
            Recent Courses
          </Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>

            </div>
          {/* </div> 

          <div class="basis-4/12">
          <div class="max-w-[50rem] mt-10 p-6 bg-white border border-gray-800 rounded-lg shadow bg-zinc-100 ">
              <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                Requirements
              </Typography>
              <Typography>
                Just some high school mathematics level.
              </Typography>

              <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                Description
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>

              <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                Who this course is for:
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>


            </div> 




          </div>
        </div>*/}

        <div class="max-w-full mt-10 p-6 bg-white border border-gray-800 rounded-lg shadow bg-zinc-100 ">
              <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                Requirements
              </Typography>
              <Typography>
                Just some high school mathematics level.
              </Typography>

              <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                Description
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>

              <Typography variant="h3" component="h2" marginTop={3} marginBottom={2} fontSize={25} fontWeight={'bold'} >
                Who this course is for:
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>


            </div>


        <div className=' font-semibold leading-normal text-start'>
          <Typography variant="h1" component="h1" marginTop={5} marginBottom={2} fontSize={30} fontWeight={'bold'} >
            Recent Courses
          </Typography>

          <CourseSlider courses={courses} sliderId="slider-3" />
        </div>





      </div>
    </>
  )
}

export default CoursePreview
