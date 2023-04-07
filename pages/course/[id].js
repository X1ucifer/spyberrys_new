import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
// import { getCourses } from '../lib/api'
import { PlayArrow } from '@mui/icons-material';

const CoursePreview = () => {
  const router = useRouter()
  const { id } = router.query
  const [course, setCourse] = useState(null)

  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
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

  return (
    <>
      <Head>
        <title>make- Course Preview</title>
      </Head>
      <div className="bg-gray-100">
        <div
          className="bg-cover bg-center h-[500px] w-full"
          style={{ backgroundImage: `url('https://res.cloudinary.com/ddap9cqvo/image/upload/v1678775131/kai-gradert-DtDe2ZTfAcM-unsplash_msljmx.jpg')` }}
        >
          <div className="h-full w-full flex justify-center items-center">
            <div className="bg-white shadow-md rounded-md p-6">
              <Typography variant="h1">Course Title</Typography>
              <Typography variant="subtitle1">By Author Name</Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PlayArrow />}
                onClick={() => alert('Start course')}
              >
                Start Course
              </Button>
            </div>
          </div>
        </div>
        <div className="p-8">
          <Typography variant="h3" gutterBottom>
            Course Description
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            lacinia sapien at ante egestas tincidunt. Nullam ac elit eu elit
            consectetur faucibus ac eu enim. Sed tristique, libero in auctor
            hendrerit, risus lacus auctor sem, ac tincidunt ipsum dolor in velit.
            Mauris maximus, eros in eleifend tincidunt, metus mauris pharetra ex,
            sit amet ultricies dolor turpis sit amet dui.
          </Typography>
          <Typography variant="h3" gutterBottom>
            Course Curriculum
          </Typography>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
              <div className="flex-grow">
                <Typography variant="subtitle1">Course Section Title</Typography>
                <Typography variant="body2">4 Lessons</Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<PlayArrow />}
                onClick={() => alert('Start section')}
              >
                Start
              </Button>
            </div>
            <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
              <div className="flex-grow">
                <Typography variant="subtitle1">Course Lesson Title</Typography>
                <Typography variant="body2">25:34</Typography>
              </div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<PlayArrow />}
                onClick={() => alert('Start lesson')}
              >
                Start
              </Button>
            </div>
          </div>
          {!isEnrolled && (
            <div className="flex justify-end mt-8">
              <Button variant="contained" color="primary" onClick={handleEnroll}>
                Enroll Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CoursePreview
