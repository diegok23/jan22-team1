import { Box, Button, Paper, styled } from "@mui/material";
import bg from "../../img/banner-section-1.jpg";
import bg2 from "../../img/banner-section-2.JPG";
import bg3 from "../../img/banner-section-3.JPG";
/*SECTION 1 LANDING PAGE */

/*SECTION 1 MAIN CONTAINER */

export const SectionContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  padding: theme.spacing(1),
  height: "100vh",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#000000",
    backgroundSize: "500px 400px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
}));

/*SECTION 1 CONTENT CONTAINER */

export const ContentContainer = styled(Box)(({ theme }) => ({
  width: "30%",
  height: "20%",
  backgroundColor: "transparent",
  paddingRight: "20px",
  textAlign: "start",
  marginTop: "100px",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px",
    alignItems: "center",
  },
}));

/*BOX FOR ARROW ICON ON LEFT*/

export const LeftArrowBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "3%",
}));

/*BOX FOR ARROW ICON ON LEFT*/

export const RightArrowBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "3%",
}));

/*BOX FOR MINIMIZE ICONS*/

export const MinimizeIconsBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  [theme.breakpoints.only("xs")]: {
    top: "85%",
    right: "35%",
  },
  [theme.breakpoints.down("md")]: {
    top: "85%",
    right: "40%",
  },
  [theme.breakpoints.up("md")]: {
    top: "80%",
    right: "42%",
  },
}));

/*SECTION 2 LANDING PAGE */

/* BUTTON TO GO TO FEED PAGE */
export const GoButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {},
  marginTop: "30px",
  marginBottom: "20px",
  textTransform: "none",
  width: "22%",
}));

/*SECTION 2 MAIN CONTAINER */

export const Section2Container = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(1),
  height: "100vh",
  backgroundImage: `url(${bg2})`,
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "	#000000 ",
    backgroundSize: "500px 400px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
}));

/*SECTION 2 CONTENT CONTAINER */

export const Content2Container = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "20%",
  backgroundColor: "transparent",
  textAlign: "center",
  marginTop: "100px",
  marginLeft: "20px",
  boxShadow: "none",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px",
    alignItems: "center",
    marginLeft: "0px",
  },
}));

/*SECTION 3 LANDING PAGE */

/*SECTION 3 MAIN CONTAINER */

export const Section3Container = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${bg3})`,
  backgroundSize: "cover",
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "	#DEDEDE",
    backgroundSize: "500px 300px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
}));

/*SECTION 3 CONTENT CONTAINER */

export const Content3Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "20%",
  backgroundColor: "transparent",
  textAlign: "center",
  marginTop: "50px",
  marginLeft: "20px",
  boxShadow: "none",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    alignItems: "center",
    marginLeft: "0px",
    marginTop: "50px",
  },
}));
