import { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, MenuItem } from '@mui/material';
import { SearchIcon } from '@mui/icons-material';
import CourseCard from '../components/Courses/courseCard';


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


    const [searchQuery, setSearchQuery] = useState('');
    const [filterOptions, setFilterOptions] = useState('');

    const handleSearch = () => {
        // Handle search logic
    };

    const handleFilterChange = (event) => {
        setFilterOptions(event.target.value);
        // Handle filter logic
    };


    return (
        <div className='mt-[100px]'>
            <Container maxWidth="lg" sx={{ pt: 6 }}>
                <Grid container spacing={4} alignItems="center" mb={4}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <TextField
                           
                            fullWidth
                            size="small"
                            variant="outlined"
                            label="Search courses"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Button
                            variant="contained"
                            className='bg-primary'                          
                            // startIcon={<SearchIcon />}
                            onClick={handleSearch}
                            fullWidth
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="h4" mb={4}>
                    All Courses
                </Typography>
                <Grid container spacing={4}>
                    {/* Render your course cards here */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 m-[70px] ">
                        {courses.map((course) => (
                            <CourseCard key={course.id} {...course} />
                        ))}
                    </div>
                    {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CourseCard title="Course 2" />
                    </Grid> */}
                    {/* Add more CourseCard components for each course */}
                </Grid>
            </Container>
        </div>
    )
}

export default Allcourses