import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";

import CardMain from "./CardModel/CardMain";
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

const Feed = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          color: "white.main",
        }}
        flex={4}
        p={{md:2}}
      >
        <CardMain />
        <CardMain />
        <CardMain />
      </Box>
    </ThemeProvider>
  );
};

export default Feed;
