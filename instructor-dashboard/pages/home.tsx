import React from 'react';
import { useList } from "@pankod/refine-core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chart2 from "@components/charts/chart2";
import dynamic from 'next/dynamic';
import DashboardCard from "@components/common/DashboardCard";
import PieChart from "@components/charts/PieChart";
import TotalRevenue from "@components/charts/TotalRevenue";


const Home = () => {

    const DynamicPieChart = dynamic(() => import('@components/charts/PieChart'), { ssr: false });
    const DynamicTotalRevenue = dynamic(() => import('@components/charts/TotalRevenue'), { ssr: false });
    const { data, isLoading, isError } = useList({
        resource: "properties",
        config: {
            pagination: {
                pageSize: 4,
            },
        },
    });

    // const latestProperties = data?.data ?? [];

    // if (isLoading) return <Typography>Loading...</Typography>;
    // if (isError) return <Typography>Something went wrong!</Typography>;

    return (
        <Box>
      
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
           
           <>
             <DynamicPieChart
               title="No.of Courses"
               value={684}
               series={[75, 25]}
               colors={["#275be8", "#c4e8ef"]}
             />
             <DynamicPieChart
               title="Total Revenue"
               value={550}
               series={[60, 40]}
               colors={["#275be8", "#c4e8ef"]}
             />
             <DynamicPieChart
               title="Total Students"
               value={5684}
               series={[75, 25]}
               colors={["#275be8", "#c4e8ef"]}
             />
             <DynamicPieChart
               title="Payouts"
               value={555}
               series={[75, 25]}
               colors={["#275be8", "#c4e8ef"]}
             />
           </>
       
       </Box>

            <Stack
                mt="25px"
                width="100%"
                direction={{ xs: "column", lg: "row" }}
                gap={4}
            >
                <DynamicTotalRevenue />
                <Chart2 />
            </Stack>

            <Box
                flex={1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
            >
                <Typography fontSize="18px" fontWeight={600} color="#11142d">
                    Latest Courses
                </Typography>

                <Box
                    mt={2.5}
                    sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
                >
                    {/* {latestProperties.map((property) => (
                        <DashboardCard
                            key={property._id}
                            id={property._id}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            photo={property.photo}
                        />
                        ))} */}

                        <DashboardCard
                          key="1"
                          id="1"
                          title="test"
                          location="mtm"
                          price="123"
                          photo=""/>
                  
                </Box>
            </Box>
        </Box>
    );
};

export default Home;