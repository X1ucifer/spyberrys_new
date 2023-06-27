import { LayoutProps } from "@pankod/refine-core";
import { Box } from "@pankod/refine-mui";
import { useEffect, useState } from 'react';
import { Header as DefaultHeader } from "../header";
import { Sider as DefaultSider } from "../sider";
import TotalRevenue from "@components/charts/TotalRevenue";
import Chart2 from "@components/charts/chart2";
import dynamic from "next/dynamic";


export const Layout: React.FC<LayoutProps> = ({
  Sider,
  Header,
  Footer,
  OffLayoutArea,
  children,
}) => {
  const SiderToRender = Sider ?? DefaultSider;
  const HeaderToRender = Header ?? DefaultHeader;




  const DynamicPieChart = dynamic(() => import('@components/charts/PieChart'), { ssr: false });

  return (
    <Box display="flex" flexDirection="row">
      <SiderToRender />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: "100vh",
        }}
      >
        <HeaderToRender />

       

       
        <Box
          component="main"
          sx={{
            p: { xs: 1, md: 2, lg: 3 },
            flexGrow: 1,
            bgcolor: (theme) => theme.palette.background.default,
          }}
        >
          {children}
        </Box>
 
        {Footer && <Footer />}
      </Box>
      {OffLayoutArea && <OffLayoutArea />}
    </Box>
  );
};