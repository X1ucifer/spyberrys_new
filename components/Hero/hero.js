import React from 'react'
import Slider from 'react-slick';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { useState, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ResponsiveContainer from "../../utils/responsiveContainer"


function Hero() {


  const [isWideScreen, setIsWideScreen] = useState(false);
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    setIsWideScreen(isMdScreen);
  }, [isMdScreen]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const [sliderRef, setSliderRef] = useState(null);

  const goToNext = () => {
    sliderRef.slickNext();
  };

  const goToPrev = () => {
    sliderRef.slickPrev();
  };

  const [activeSlide, setActiveSlide] = useState(0)

  const prevSlide = () => {
    setActiveSlide((activeSlide - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % slides.length)
  }

  // https://res.cloudinary.com/ddap9cqvo/image/upload/v1672988978/jenny-ueberberg-BaSeK7rwc1A-unsplash_iocxyu.jpg

  return (



    <Box
      sx={{
        backgroundImage: `url('https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203043/bg-hero-2-900-x1.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        minHeight: '680px',
        display: 'flex',
        objectPosition: 'center',
        objectFit: 'cover',

        alignItems: 'center',
      }}


    >
      <Container>
        <Typography variant="h2" component="h1" gutterBottom sx={{ textAlign: 'left', mb: '4' }} className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-pink-400 to-white max-w-[600px]">
          Upgrade your knowledge with our online courses.
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ textAlign: 'left' }} className="text-white  max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum massa vitae risus bibendum
          fermentum.
        </Typography>
      </Container>
    </Box>
  )  
}

export default Hero