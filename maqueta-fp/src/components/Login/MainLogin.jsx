import { Box } from "@mui/system";
import { createTheme, Stack, ThemeProvider } from "@mui/material";
import SidePanel from "./SidePanel";
import RightPanel from "./RightPanel";

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

function MainLogin() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <SidePanel  />
          <RightPanel />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default MainLogin;
