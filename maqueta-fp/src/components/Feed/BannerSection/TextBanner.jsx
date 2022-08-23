import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
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
});

theme.typography.h2 = {
  fontSize: "1.6rem",
  fontWeight: "700",
  color: "white",
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3.5rem",
  },
  '@media (min-width:2560px)': {
    fontSize: '4.5rem',
  },
};

function TextBanner() {
  return (
    <ThemeProvider theme={theme}>
      <Box mt={{md:23,lg:20,xl:22}} ml={{md:32, lg:45,xl:62}}>
        <Typography variant="h2">Find a route and</Typography>
        <Typography variant="h2">
          begin your adventure{" "}
          <Typography variant="h2" component="span" color="secondary">
            now
          </Typography>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default TextBanner;
