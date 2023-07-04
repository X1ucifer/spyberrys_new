import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Head from "next/head";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Typography } from "@mui/material";
import CourseSlider from "/components/Slider/courseSlider.js";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);

  // useEffect(() => {
  //   if (!user) {
  //     // Redirect to login page if user is not logged in
  //     window.location.href = "/login";
  //   }
  // }, [user]);

  const renderProfileContent = () => {
    // if (!user) {
    //   return null;
    // }

    // const { role } = user;
    const role = "student";

    if (role === "student") {
      const [value, setValue] = React.useState("1");

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      //already enrolled courses list

      const enrolledcourses = [
        {
          id: 1,
          title: "Advanced SEO Strategies 2023 - Level Up Your SEO Knowledge",
          author: "Author 1",
          rating: "4.5",
          price: "$19.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course1.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency From Home - The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 1,
          title: "Advanced Crypto Trading COurse",
          author: "Kralow",
          rating: "4.5",
          price: "$33.99",
          enrolledStudents: "78",
          category: "Trading",
          imageSrc: "/images/course3.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency From Home - The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency From Home - The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 1,
          title: "Advanced SEO Strategies 2023 - Level Up Your SEO Knowledge",
          author: "Author 1",
          rating: "4.5",
          price: "$19.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course1.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency From Home - The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency From Home - The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
      ];

      //wished list api

      const wishedcourses = [
        {
          id: 1,
          title: "Level Up Your SEO Knowledge",
          author: "Author 1",
          rating: "4.5",
          price: "$19.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course1.jpg",
        },
        {
          id: 2,
          title: "The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 1,
          title: "Trading COurse",
          author: "Kralow",
          rating: "4.5",
          price: "$33.99",
          enrolledStudents: "78",
          category: "Trading",
          imageSrc: "/images/course3.jpg",
        },
        {
          id: 2,
          title: "The Complete Blueprint",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency From Home",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 1,
          title: "Advanced SEO Strategies 2023",
          author: "Author 1",
          rating: "4.5",
          price: "$19.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course1.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO Agency ",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
        {
          id: 2,
          title: "Start Your Own SEO",
          author: "Author 2",
          rating: "4.8",
          price: "$29.99",
          enrolledStudents: "78",
          category: "SEO",
          imageSrc: "/images/course2.jpg",
        },
      ];

      return (
        <div className="mt-[10px]">
          {/* student profile content added here */}

          <>
            <Head>
              <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
              />
              <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
              />
            </Head>

            {/*educator profile content can be placed here*/}

            <main className="profile-page">
              {/* <section className="relative block h-500-px">
                <div
                  className="absolute top-0 w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
                  }}
                >
                  <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                  ></span>
                </div>
                <div
                  className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                  style={{ transform: "translateZ(0px)" }}
                >
                  <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="text-blueGray-200 fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon>
                  </svg>
                </div>
              </section> */}


              

              <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                          <div className="relative">
                            <img
                              alt="..."
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                          <div className="py-6 px-3 mt-32 sm:mt-0">
                            <button
                              className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              Follow
                            </button>
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12 px-4 lg:order-1">
                          <div className="flex justify-center py-4 lg:pt-4 pt-8">
                            <div className="mr-4 p-3 text-center">
                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                22
                              </span>
                              <span className="text-sm text-blueGray-400">
                                Courses
                              </span>
                            </div>
                            <div className="mr-4 p-3 text-center">
                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                10
                              </span>
                              <span className="text-sm text-blueGray-400">
                                Likes
                              </span>
                            </div>
                            <div className="lg:mr-4 p-3 text-center">
                              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                89
                              </span>
                              <span className="text-sm text-blueGray-400">
                                Comments
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-12">
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                          Zayra
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                          Nagercoil, TamilNadu
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                          <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                          Full Stack Web Development - Tutor
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                          University of Computer Science
                        </div>
                      </div>
                      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                          <div className="w-full lg:w-9/12 px-4">
                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                              An artist of considerable range, Jenna the name
                              taken by Melbourne-raised, Brooklyn-based Nick
                              Murphy writes, performs and records all of his own
                              music, giving it a warm, intimate feel with a
                              solid groove structure. An artist of considerable
                              range.
                            </p>
                            {/* <a
                              href="#pablo"
                              className="font-normal text-pink-500"
                            >
                              Show more
                            </a> */}
                          </div>
                        </div>
                      </div>

                      <Box sx={{ width: "100%", typography: "body1" }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                              onChange={handleChange}
                              aria-label="lab API tabs example"
                              centered="true"
                            >
                              <Tab label="Enrolled Courses" value="1" />
                              <Tab label="Your Wishlist" value="2" />
                            </TabList>
                          </Box>

                          <TabPanel value="1">
                            <div class="max-w-full mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow bg-zinc-100 drop-shadow-xl ">
                              <CourseSlider
                                courses={enrolledcourses}
                                sliderId="slider-1"
                              />
                            </div>
                          </TabPanel>

                          {/* tab2 */}

                          <TabPanel value="2">
                            <div class="max-w-full mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow bg-zinc-100 drop-shadow-xl ">
                              <CourseSlider
                                courses={wishedcourses}
                                sliderId="slider-2"
                              />
                            </div>
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </>
        </div>
      );
    } else if (role === "Instructor") {
      return <>{/* Instructor code written here */}</>;
    } else {
      return (
        <div>
          <h1>Invalid Role</h1>
          {/* Handle invalid role scenario */}
        </div>
      );
    }
  };

  return <div>{renderProfileContent()}</div>;
};

export default Profile;
