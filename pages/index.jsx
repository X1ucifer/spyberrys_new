// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import MyComponent from "../components/ColorModes/colorSwitch";
import Hero from "../components/Hero/hero";
import CourseCard from '../components/Courses/courseCard';
import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import dynamic from 'next/dynamic';
import CourseSlider from '../components/Slider/courseSlider';




const Home = () => {


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
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>


        <Hero />

        <h1 className='text-center mt-[50px] font-bold text-[40px]'>Top Courses</h1>

        <CourseSlider courses={courses} sliderId="slider-1" />

        <CourseSlider courses={courses} sliderId="slider-2" />


        <div className="mb-[100px]">

        </div>
      </div>


    </div>
  )
}

export default Home
