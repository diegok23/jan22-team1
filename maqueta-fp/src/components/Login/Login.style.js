import { Box, Paper, styled, Button, TextField } from "@mui/material";
import bg from "../../img/login-bg-mobile.JPG";
import bgsb from "../../img/sidebar-login-bg.JPG";

/*RIGHT PANEL CONTAINER*/
export const PanelRight = styled(Paper)(({ theme }) => ({
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

/*HOME ICON CONTAINER RIGHTPANEL */
export const BoxHomeIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "1%",
  right: "5%",
}));

/*BUTTON HOME */
export const ButtonHome = styled(Button)(({ theme }) => ({
  height: "42px",
  borderRadius: "50px",
  minWidth: "25px",
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
  textTransform: "none",
  padding: "0px",
}));

/*INPUTS CONTAINER RIGHTPANEL */
export const BoxInputs = styled(Box)(({ theme }) => ({
  [theme.breakpoints.only("xs")]: {
    backgroundColor: "rgba(0,0,0,0.6)",
    height: "auto",
    borderRadius: "15px",

  },
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "transparent",
    width: "100%",
    borderRadius: "15px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "60%",

  },
}));


/*TEXT FIELD FOR EMAIL AND PASSWORD */
export const Input = styled(TextField)(({ theme }) => ({
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

/*LOGIN BUTTON */
export const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {},
  marginTop: "30px",
  marginBottom: "20px",
  textTransform: "none",
  width: "22%",
}));

/*LEFT PANEL CONTAINER*/
export const LeftPanel = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${bgsb})`,
  backgroundSize: "cover",
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "50%",
  height: "100vh",
  [theme.breakpoints.only("xs")]: {
display:'none'
  },
}));