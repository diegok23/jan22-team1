import {
  Button,
  createTheme,
  Paper,
  styled,
  TextField,
  ThemeProvider,
  Typography,
  Box,
} from "@mui/material";
import bg from "../../img/login-bg-mobile.JPG";
import HomeIcon from "@mui/icons-material/Home";
import {Link} from "react-router-dom"

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
  position: "relative",
  textAlign: "center",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: " center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const ButtonPer = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {},
  marginTop: "30px",
  marginBottom: "20px",
  textTransform: "none",
  width: "22%",
}));
const Input = styled(TextField)(({ theme }) => ({
  input: { color: theme.palette.secondary.main },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  width: "60%",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));
const ButtonHome = styled(Button)(({ theme }) => ({
  height:'42px',
  borderRadius: "50px",
  minWidth:'25px',
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  textTransform: "none",
  padding:'0px',

}));

function RightPanel() {
  return (
    <ThemeProvider theme={theme}>
      <Panel>
        <Box sx={{ position: "absolute", top: "1%", right: "5%" }}>
          <ButtonHome >
            <Link to='/'><HomeIcon
              color="secondary"
              sx={{
                fontSize: { xs: "30px", sm: "30px", md: "40px" },
                "& :hover": { color: "#fff" }, marginTop:'5px'
              }}
            /></Link>
          </ButtonHome>
        </Box>
        <Box
          sx={{
            backgroundColor: { xs: "rgba(0,0,0,0.6)", sm: "transparent" },
            width: { xs: "80%", sm: "60%" },
            height: { xs: "auto", sm: "50%" },
            borderRadius: { xs: "15px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: { xs: "white.main", sm: "secondary.main" },
              fontSize: "2.4rem",
              mt: { xs: "15px", sm: "0px" },
            }}
          >
            Cy
            <Typography
              variant="span"
              sx={{ color: "secondary.main", fontSize: "2.4rem" }}
            >
              Click
            </Typography>
          </Typography>

          <Typography
            variant="p"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              color: { xs: "white.main", sm: "black" },
            }}
          >
            Need a{" "}
            <Typography variant="span" sx={{ color: "secondary.main" }}>
              CyClick{" "}
            </Typography>{" "}
            account? Create an account{" "}
            <Typography variant="span" sx={{ color: "secondary.main" }}>
              here.
            </Typography>
          </Typography>

          <Box>
            <Input
              required
              id="standard-read-only-input"
              label="Email Address"
              variant="standard"
              color="secondary"
              focused
            />
          </Box>

          <Box>
            <Input
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              color="secondary"
              focused
            />
          </Box>

          <ButtonPer size="small" variant="contained">
            <Typography>Log in</Typography>
          </ButtonPer>
        </Box>
      </Panel>
    </ThemeProvider>
  );
}

export default RightPanel;
