import { createTheme, Paper, styled, ThemeProvider } from "@mui/material";
import bg from '../../img/sidebar-login-bg.JPG'
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
const Panel = styled(Paper)(({ theme }) => ({
    backgroundImage: `url(${bg})`,
    backgroundSize:'cover',
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "50%",
  height:'100vh'
}));

function SidePanel() {
  return (
    <ThemeProvider theme={theme}>
      <Panel sx={{display:{ xs: "none", sm: "block"}}}>Item 1</Panel>
    </ThemeProvider>
  );
}

export default SidePanel;