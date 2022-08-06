import * as React from 'react';
import Box from '@mui/material/Box';
import bgLogin from  '../../img/fondo8.jpg'
import { CssBaseline } from '@mui/material';
import Header from './Header'
import SectionOne from './SectionOne';
export default function Home() {
  return (
    <Box
      sx={{
      minHeight : '100vh',
     backgroundImage : `url(${process.env.PUBLIC_URL + bgLogin})`,
     backgroundRepeat : "no-repeat",
     backgroundSize : "cover",
      }}>
        <CssBaseline/>
        <Header/>
        <SectionOne/>
        </Box>
  
  );
}
