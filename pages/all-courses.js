import { useState } from 'react';
import { Box, Container, Grid, Typography, MenuItem, Select, Pagination, Alert } from '@mui/material';
import { SearchIcon } from '@mui/icons-material';
import CourseCard from '../components/Courses/courseCard';
import CourseSlider from '../components/Slider/courseSlider';


function Allcourses() {


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

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 6;

    // Filter courses based on selected category
    const filteredCourses = selectedCategory === 'All' ? courses : courses.filter(course => course.category === selectedCategory);

    // Pagination
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
    const totalCourses = filteredCourses.length;
    const totalPages = Math.ceil(totalCourses / coursesPerPage);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setCurrentPage(1); // Reset pagination when category changes
    };

    const handlePaginationChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='mt-[100px]'>


            <Box py={6}>



                <Container maxWidth="xl">

                    <Typography variant="h5">Courses to get you started</Typography>

                    <div>
                        <CourseSlider courses={courses} sliderId="slider-1" />
                    </div>

                    <Alert variant="outlined" severity="info" sx={{ borderColor: 'black' }} className='mb-[50px]'>
                        Not sure? All courses have a 30-day money-back guarantee
                    </Alert>

                    <Box mb={4} display="flex" alignItems="center" justifyContent="space-between">
                        <Typography variant="h5">All Courses</Typography>
                        <Select value={selectedCategory} onChange={handleCategoryChange} variant="outlined">
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Category 1">Category 1</MenuItem>
                            <MenuItem value="Category 2">Category 2</MenuItem>
                            <MenuItem value="Category 3">Category 3</MenuItem>
                        </Select>
                    </Box>
                    <Grid container spacing={4}>
                        {currentCourses.map((course) => (
                            <Grid key={course.id} item xs={12} sm={6} md={3}>
                                <CourseCard key={course.id} {...course} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={4} display="flex" justifyContent="center">
                        <Pagination count={totalPages} page={currentPage} onChange={handlePaginationChange} />
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Allcourses