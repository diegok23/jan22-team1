import { Button, Card, CardActions } from "@mui/material";
import styled from "@emotion/styled";

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

export const CardActionsPer = styled(CardActions)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "space-between",
  borderTop: "solid",
  borderWidth: "1px",
  borderColor: "#bdbdbd",
}));

export const CardPer = styled(Card)(({ theme }) => ({
  width: "100%",
  borderRadius: "0px",
  [theme.breakpoints.up("md")]: {
    marginTop: "20px",
    borderRadius: "30px",
    "&:first-of-type": { marginTop: "16px" },
    "&:last-of-type": { marginBottom: "30px" },
    width: "70%",
  }
}));
