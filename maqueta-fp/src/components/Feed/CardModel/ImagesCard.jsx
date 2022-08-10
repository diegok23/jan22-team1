import React from "react";
import { CardMedia, createTheme, Stack, ThemeProvider } from "@mui/material";
import img1 from "../../../img/invitation1.jpg";
import img2 from "../../../img/invitation2.jpg";
import img3 from "../../../img/fondo7.jpg";
import { Box } from "@mui/system";

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
    fontFamily: "Nunito, sans-serif",
  },
});

const ImagesCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" height="50vh" sx={{backgroundColor:'#fff'}}>
        <Stack
          sx={{
            width: "60%",
            height: "100%",
            paddingY: "8px",
            paddingRight: "4px",
            paddingLeft: "8px",
          }}
        >
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height="100%"
            image={img3}
            alt="Paella dish"
          />
        </Stack>
        <Stack
          sx={{
            width: "40%",
            height: "100%",
            paddingY: "8px",
            paddingRight: "8px",
            paddingLeft: "4px",
          }}
        >
          <CardMedia
            sx={{ borderRadius: "10px", paddingBottom: "9px" }}
            component="img"
            height="49%"
            image={img2}
            alt="Paella dish"
          />
          <CardMedia
            sx={{ borderRadius: "10px" }}
            component="img"
            height="49%"
            image={img1}
            alt="Paella dish"
          />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default ImagesCard;
