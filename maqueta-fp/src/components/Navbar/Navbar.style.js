import styled from "@emotion/styled";
import {Toolbar,Box,Button, TextField} from "@mui/material";

/*TOOLBAR CONTAINER */
export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  
/*ICONS CONTAINER FULL VIEW  */

export const IconsBox = styled(Box)(({ theme }) => ({
    backgroundColor: "primary",
    display: "none",
    gap: "15px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  /*BUTTON FOR LOGIN */
  export const ButtonLogin = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "rgb(255,255,255,0.15)",
    },
    textTransform: "none",
    color: theme.palette.white.main,
    borderRadius: "80px",
    minWidth: "36px",
  }));
  
 /*ICONS CONTAINER MOBILE VIEW  */ 
export const MobileIconsBox = styled(Box)(({ theme }) => ({
    backgroundColor: "primary",
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

   /*BUTTON FOR CREATE ROUTE */
   export const ButtonCreate = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    textTransform: "none",
    color: theme.palette.white.main,
    borderRadius: "80px",
    minWidth: "100px",
    height:'25px',
    "&:hover": {
      backgroundColor: "rgb(255,255,255,0.15)",
    }
  }));

  /*POP UP TO CREATE A NEW ROUTE */

  export const PopupNewRoute = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    paddingLeft:'20px',
    paddingRight:'20px',
    borderRadius:'20px'
  }));

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

  /*TEXT FIELD FOR FIRST NAME */
export const InputDoubleLeft = styled(TextField)(({ theme }) => ({
  input: { color: theme.palette.secondary.main },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  width: "20%",
  marginRight: "2%",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "40%",
  },
}));

/*TEXT FIELD FOR LAST NAME */
export const InputDoubleRight = styled(TextField)(({ theme }) => ({
  input: { color: theme.palette.secondary.main },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  width: "20%",
  marginLeft: "2%",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "40%",
  },
}));
  