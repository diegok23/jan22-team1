import React from "react";
import {
  CardContent,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#15d4be",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Raleway",
  },
});

const TypeandDataCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardContent sx={{backgroundColor:'#fff', display:'flex', justifyContent:'space-between',alignItems:'center', paddingX:{lg:'30px'}}}>
        <Typography fontStyle='italic' variant="body2" color="text.secondary" sx={{fontSize:{sm:'15px',md:'15px', lg:'18px'}, fontWeight:'700'}} >
            Route`s Type: <Typography variant="spam" fontStyle='italic'>Mountain.</Typography> <Typography variant="spam">5,5 Km</Typography>
        </Typography>
        <Typography color="text.secondary"  variant="body2" sx={{fontSize:{sm:'15px',md:'15px', lg:'18px'}, fontWeight:'700'}}>22/08/2022</Typography>
      </CardContent>
    </ThemeProvider>
  );
};

export default TypeandDataCard;
