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
        <div className="">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 m-[70px]  lg:w-[60%]">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
