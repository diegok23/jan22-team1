import React from "react";
import {AppBar,InputBase,Toolbar,Typography,Box,Button} from "@mui/material";
import styled from "@emotion/styled";
import { Person, DirectionsBike, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const SearchPer = styled("div")({
  position: "relative",
  backgroundColor: "#4c4c4c",
  borderRadius: "15px",
  "& :hover": {
    backgroundColor: "rgb(163,163,163,0.25)",
    width: "100%",
    borderRadius: "15px",
  },
  width: "30%",
  marginRight: "10px",
});
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
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
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "primary",
  display: "none",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const ButtonLogin = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "rgb(255,255,255,0.15)",
  },
  textTransform: "none",
  color: theme.palette.white.main,
  borderRadius: "80px",
  minWidth: "36px",
}));

const MobileIcons = styled(Box)(({ theme }) => ({
  backgroundColor: "primary",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBarLanding = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar variant="dense">
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Cy
          <Typography variant="h6" component="span" color="secondary">
            Click
          </Typography>
        </Typography>
        <DirectionsBike
          color="secondary"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Box sx={{ flexGrow: 1 }} />

        <SearchPer>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </SearchPer>

        <Icons>
          <ButtonLogin>
            <Typography variant="p">
              {" "}
              <Link to="/sign-up"> Become a member</Link>
            </Typography>
          </ButtonLogin>
          <Typography variant="p" sx={{ fontSize: "0.875rem" }}>
            Log in
          </Typography>
          <Link to="/login">
            <ButtonLogin>
              <Person
                color="secondary"
                fontSize="small"
                sx={{ padding: "0px" }}
              />
            </ButtonLogin>
          </Link>
        </Icons>

        <MobileIcons>
          <Link to="/login">
            <ButtonLogin>
              <Person
                color="secondary"
                fontSize="small"
                sx={{ padding: "0px" }}
              />
            </ButtonLogin>
          </Link>
        </MobileIcons>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBarLanding;
