import styled from "@emotion/styled";
import {Toolbar,Box,Button} from "@mui/material";

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