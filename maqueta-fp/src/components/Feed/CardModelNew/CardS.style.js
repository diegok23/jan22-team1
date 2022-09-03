import styled from "@emotion/styled";
import { Button, Card, CardActions } from "@mui/material";


export const ButtonPer = styled(Button)(({ theme }) => ({
    textTransform: "capitalize",
    marginLeft: "10px",
    borderRadius: "10px",
    color: theme.palette.white.main,
    fontSize: "0.7rem",
    fontWeight: "700",
    fontFamily: "Raleway",
    [theme.breakpoints.up("md")]: {
      fontSize: "0.8rem",
    },
  }));

  
export const CardPer = styled(Card)(({ theme }) => ({
    borderRadius:'0px',
     [theme.breakpoints.up("md")]: {
       marginTop:'20px',
       borderRadius:'30px',
       '&:first-of-type': { marginTop:'16px'},
       '&:last-of-type': { marginBottom:'30px'},
     },
   }));
   

export const CardContainer = styled(CardActions)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    borderTop: "solid",
    borderWidth: "1px",
    borderColor: "#bdbdbd",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("md")]:{
      backgroundColor: theme.palette.primary.main
    }
  }));