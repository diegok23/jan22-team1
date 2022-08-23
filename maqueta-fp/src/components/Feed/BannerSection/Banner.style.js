import { Paper, styled, InputBase } from "@mui/material";
import bg from "../../../img/bannerSearch.JPG";

export const Panel = styled(Paper)(({ theme }) => ({
  display: "none",
  backgroundImage: `url(${bg})`,
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  height: "65vh",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const SearchPer = styled("div")({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "15px",
  "& :hover": {
    backgroundColor: "rgb(163,163,163,0.25)",
    width: "100%",
    borderRadius: "15px",
  },
  width: "30%",
  marginRight: "10px",
});

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "0.8rem",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
}));
