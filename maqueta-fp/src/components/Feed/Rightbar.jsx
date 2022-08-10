import React from "react";
import { Box, createTheme, Paper, Stack, ThemeProvider } from "@mui/material";
import img1 from "../../img/right-panel-feed.jpg";
import img2 from "../../img/right-panel-2-feed.JPG";
import styled from "@emotion/styled";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
  padding: theme.spacing(1),
  height: "42.5vh",
  borderRadius: "15px",
  [theme.breakpoints.up("lg")]: {
    height: "44.5vh",
  },
  [theme.breakpoints.up("sm")]: {
    height: "42.5vh",
    marginTop: "16px",
  },
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  padding: theme.spacing(1),
  height: "42.5vh",
  borderRadius: "15px",
  [theme.breakpoints.up("lg")]: {
    height: "44.5vh",
  },
  [theme.breakpoints.up("sm")]: {
    height: "42.5vh",
  },
}));

const Rightbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          color: "white.main",
          display: { xs: "none", md: "block" },
        }}
        flex={2}
        p={2}
      >
        <Box
          sx={{ width: { xl: "27%", lg: "26%", sm: "26.5%" } }}
          position="fixed"
        >
          <Box sx={{ width: { md: "95%", lg: "100%" } }}>
            <Stack spacing={2}>
              <Item></Item>
              <Item2></Item2>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Rightbar;
