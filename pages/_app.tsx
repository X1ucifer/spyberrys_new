import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextProvider } from 'next-themes';
import { CssBaseline } from '@mui/material';
import { theme } from '../styles/theme';
import { useTheme } from 'next-themes';
import Layout from "../components/Layout/layout"
import '../styles/slider.css'
import { Provider } from 'react-redux';
import store from '../store';
import 'swiper/swiper.min.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css';


function MyApp({ Component, pageProps }: AppProps) {

  // const { theme, setTheme } = useTheme();


  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>



  )
}

export default MyApp
