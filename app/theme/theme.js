"use client"
import { createTheme } from "@mui/material/styles";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });
  
 const theme = createTheme({
    palette: {
      primary: {
        main: '#F5A800',
      },
      secondary: {
        main: '#DB1B16',
      },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
      }
  });
  export default theme;