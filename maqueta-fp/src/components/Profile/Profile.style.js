import styled from "@emotion/styled";
import { Avatar, Box, Button, Paper, TextField } from "@mui/material";

/* PAPER WHERE IS CONTAINED AVATAR AND INF TO LEFT PANEL */
export const Item = styled(Paper)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#2B2B2B",
}));

/* PAPER FOR THE TOP PART OF RIGHT PANEL */
export const ItemSup = styled(Paper)(({ theme }) => ({
  height: "30vh",
  backgroundColor: "#2B2B2B",
  [theme.breakpoints.down("md")]: {
    display:'flex',
    
  }
}));
/*STYLED BUTTON FOR EDIT SECTION */
export const ButtonEdit = styled(Button)(({ theme }) => ({
  marginTop: "100px",
  height: "42px",
  minWidth: "100px",
  color: theme.palette.secondary.main,
  backgroundColor: "transparent",
  textTransform: "none",
  padding: "0px",
  marginLeft: "30px",
  "&:hover": {
    color: theme.palette.white.main,
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px"
  }
}));

/* PAPER FOR THE BUTTON PART OF RIGHT PANEL */
export const ItemInf = styled(Paper)(({ theme }) => ({
  height: "70vh",
  backgroundColor: "#2B2B2B",
  overflowY: "auto",
  "&::-webkit-scrollbar": { display: "none" },
  padding: "0px 50px 0px 50px",
  [theme.breakpoints.down("md")]: {
    padding:"0px"
  }
}));

/*STYLED BUTTON TO WATCH SAVED CARDS */
export const ButtonSavedCards = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  height: "42px",
  minWidth: "100px",
  color: theme.palette.secondary.main,
  backgroundColor: "transparent",
  textTransform: "none",
  padding: "0px",
  marginLeft: "30px",
  "&:hover": {
    color: theme.palette.white.main,
    backgroundColor: "transparent",
  },
}));

/*STYLED BUTTON TO WATCH MY CARDS */

export const ButtonMyCards = styled(Button)(({ theme }) => ({
  marginTop: "30px",
  height: "42px",
  minWidth: "100px",
  color: theme.palette.secondary.main,
  backgroundColor: "transparent",
  textTransform: "none",
  padding: "0px",
  marginLeft: "30px",
  "&:hover": {
    color: theme.palette.white.main,
    backgroundColor: "transparent",
  },
}));

/*STYLED BUTTON TO WATCH MY CARDS */

export const PopupDescription = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "20px",
}));

/*INPUT POPUP ABOUT ME */
export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginTop: "10px",
  marginBottom: "10px",
  width: "100%",
}));

/*BUTTON EDIT */
export const EditButton = styled(Button)(({ theme }) => ({
  height: "42px",
  borderRadius: "50px",
  minWidth: "100px",
  textTransform: "none",
  padding: "0px",
  marginTop: "10px",
  marginBottom: "10px",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const AvatarChangePicture = styled(Avatar)(({ theme }) => ({
  position: "absolute",
  zIndex: "2",
  top: "28%",
  left: "14%",
}));

export const AvatarsForSelect = styled(Avatar)(({ theme }) => ({
  width: "130px",
  height: "130px",
}));

export const BoxAvatarMobile = styled(Box)(({ theme }) => ({
 display:'none',
 [theme.breakpoints.down("md")]: {
  marginLeft:'20px',
  display:'flex',
  flexDirection:'column'
}
}));
