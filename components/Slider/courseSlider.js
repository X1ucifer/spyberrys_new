import { useState, useEffect, useRef } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from '../Courses/courseCard';


const CourseSlider = ({ courses, sliderId }) => {


    const [swiper, setSwiper] = useState();
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (swiper) {
            console.log("Swiper instance:", swiper);
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.params.slidesPerView = 5;
            swiper.update();
        }
    }, [swiper]);


    const prevButtonClassName = `container swiper-button-prev swiper-button swiper-button-prev-${sliderId}`;
    const nextButtonClassName = `container swiper-button-next swiper-button swiper-button-next-${sliderId}`;

    return (
        <>


            <div className="container mx-auto py-8 swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
                    slidesPerView={5}
                    spaceBetween={20}
                    onSwiper={setSwiper}
                    navigation={{
                        prevEl: `.swiper-button-prev-${sliderId}`,
                        nextEl: `.swiper-button-next-${sliderId}`,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <CourseCard key={course.id} {...course} />
                        </SwiperSlide>
                    ))}

                </Swiper>


                <div className={prevButtonClassName} ref={prevRef} />
                <div className={nextButtonClassName} ref={nextRef} />
            </div>




            <style jsx>{`
        .swiper-container {
          position: relative;
        }

        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top:35%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: black;
          color: #fff;
          display: flex;
          font-size: 6px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .swiper-button-next:after, .swiper-button-prev:after {
       
          font-size: 18px;
          font-weight: bold;
      }

        .swiper-button-prev {
          left: 0;
          margin-left: -20px;
        }

        .swiper-button-next {
          right: 0;
          margin-right: -20px;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: rgba(0, 0, 0, 0.9);
        }

        @media screen and (max-width: 767px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 30px;
            height: 30px;
            font-size: 18px;
          }
        }
      `}</style>
        </>

    );
};

export default CourseSlider;
