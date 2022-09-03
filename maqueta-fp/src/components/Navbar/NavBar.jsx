import React from "react";
import {StyledToolbar,IconsBox,ButtonLogin,MobileIconsBox,} from "./Navbar.style";
import { AppBar, Typography, Box } from "@mui/material";
import { Person, DirectionsBike } from "@mui/icons-material";
import { Link } from "react-router-dom";

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

        <IconsBox>
          <ButtonLogin>
            <Typography variant="p">
              {" "}
              <Link style={{textDecoration:'none', color:'white', fontFamily:'Raleway'}} to="/sign-up"> Become a member</Link>
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
        </IconsBox>

        <MobileIconsBox>
          <Link to="/login">
            <ButtonLogin>
              <Person
                color="secondary"
                fontSize="small"
                sx={{ padding: "0px" }}
              />
            </ButtonLogin>
          </Link>
        </MobileIconsBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBarLanding;
