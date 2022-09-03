import React, { useState } from "react";
import {StyledToolbar,IconsBox,ButtonLogin,MobileIconsBox} from "./Navbar.style";
import { AppBar, Typography, Box, Avatar, Menu, MenuItem } from "@mui/material";
import { DirectionsBike, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PopupNewRoute from "./PopupCreateRoute";

const NavbarAuth = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="fixed">
      <StyledToolbar variant="dense">
        <Link style={{ textDecoration: "none", color: "#15d4be" }} to="/feed">
          <Typography
            color="white.main"
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Cy
            <Typography variant="h6" component="span" color="secondary">
              Click
            </Typography>
          </Typography>
        </Link>

        <DirectionsBike
          color="secondary"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Box sx={{ flexGrow: 1 }} />

        <IconsBox>
          <PopupNewRoute />
          <ButtonLogin>
            <Link to="/profile">
              <Avatar
                sx={{ width: "25px", height: "25px" }}
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              ></Avatar>
            </Link>
          </ButtonLogin>
          <ButtonLogin>
            <Logout
              color="secondary"
              fontSize="small"
              sx={{ padding: "0px" }}
            />
          </ButtonLogin>
        </IconsBox>

        <MobileIconsBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          ></Avatar>
        </MobileIconsBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link style={{ textDecoration: "none", color: "#202020" }} to="/profile"><MenuItem>Profile</MenuItem></Link>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavbarAuth;
