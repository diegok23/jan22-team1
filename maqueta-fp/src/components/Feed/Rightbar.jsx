import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";

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
    fontFamily: 'Nunito, sans-serif',
  },
});
const Rightbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white.main",
          display: { xs: "none", sm: "block" }
        }}
        flex={2}
        p={2}
      >
        Rightbar
      </Box>
    </ThemeProvider>
  );
};

export default Rightbar;
