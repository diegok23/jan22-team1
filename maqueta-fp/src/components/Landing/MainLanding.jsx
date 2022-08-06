import Navbar from "./NavBarLanding";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

function MainLanding() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }} >
        <Navbar  />
        <Stack spacing={1} justifyContent="space-between" >
          <Section1 />
          <Section2 />
          <Section3 />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default MainLanding;
