import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useTheme } from 'next-themes';
import MyComponent from "../components/ColorModes/colorSwitch";
import Hero from "../components/Hero/hero";
import CourseCard from '../components/Courses/courseCard';


const Home: NextPage = () => {


  const courses = [
    {
      id: 1,
      title: 'Course 1',
      author: 'Author 1',
      rating: '4.5',
      price: '$19.99',
      imageSrc: '/images/course1.jpg',
    },
    {
      id: 2,
      title: 'Course 2',
      author: 'Author 2',
      rating: '4.8',
      price: '$29.99',
      imageSrc: '/images/course2.jpg',
    },
  ];

  const { theme } = useTheme();


  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>


        <Hero />

        <h1>Courses</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home
