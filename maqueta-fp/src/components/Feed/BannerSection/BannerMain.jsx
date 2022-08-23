import { createTheme, Paper, styled, ThemeProvider } from "@mui/material";
import bg from '../../../img/bannerSearch.JPG'
import BannerSearch from "./BannerSearch";
import TextBanner from "./TextBanner";
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
  display:'none',
    backgroundImage: `url(${bg})`,
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
  width: "100%",
  height:'65vh',
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <Panel>
       <TextBanner/>
       <BannerSearch/>
      </Panel>
    </ThemeProvider>
  );
}

export default Banner;