import { Header, Layout, Sider, Title } from "@components/layout";
import { ColorModeContextProvider } from "@contexts";
import { Refine } from "@pankod/refine-core";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import {
  AuthPage,
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  ReadyPage,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-nextjs-router";
import dataProvider from "@pankod/refine-simple-rest";
import { AppProps } from "next/app";
import { authProvider } from "src/authProvider";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AllProperties from "./all-properties";
import EditProperty from "./edit-property";
import CreateProperty from "./create-property";
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import Home from '../pages/home'
import customerTable from "./customerTable";



const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[

           
            // {
            //   name: "Dashboard",
            //   options:{label: 'Dashboard'},
            //   icon: <GridViewOutlinedIcon/>,
            //   list: MuiInferencer,
            //   edit: MuiInferencer,
            //   show: MuiInferencer,
            //   create: MuiInferencer,
            //   canDelete: true,
            // },

            // {
            //   name: "User Module",
            //   options:{label: 'User Module'},
            //   icon: <FiberManualRecordOutlinedIcon style={{color:"grey"}} fontSize="small"/>,
            // },
          
            {
              name: "Courses",
              options:{label: 'Courses'},
              icon: <PermIdentityOutlinedIcon/>,
              list: customerTable,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
            },


            {
              name: "Performance",
              options:{label: 'Performance'},
              icon: <AddLocationAltOutlinedIcon/>,
              list: MuiInferencer,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
            },


            {
              name: "Coupons",
              options:{label: 'Coupons'},
              list: MuiInferencer,
              edit: MuiInferencer,
              show: MuiInferencer,
              create: MuiInferencer,
            },

           

            
          ]}
          Title={Title}
          Sider={Sider}
          DashboardPage={Home}
          Layout={Layout}
          Header={Header}
          authProvider={authProvider}
          LoginPage={AuthPage}
        >
          <Component {...pageProps} />
        </Refine>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default MyApp;
