import React, { useState } from "react";
import {
  AppBar,Toolbar,Typography,Box,Avatar,Button,Menu,MenuItem} from "@mui/material";
import styled from "@emotion/styled";
import { DirectionsBike,Logout } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
   
      <AppBar position="fixed">
        <StyledToolbar variant="dense">
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
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


          <Icons>
            <ButtonLogin>
              <Avatar
                sx={{ width: "25px", height: "25px" }}
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              ></Avatar>
            </ButtonLogin>
            <ButtonLogin>
              <Logout
                color="secondary"
                fontSize="small"
                sx={{ padding: "0px" }}
              />
            </ButtonLogin>
          </Icons>

          <MobileIcons onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: "30px", height: "30px" }}
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            ></Avatar>
          </MobileIcons>
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
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
  );
};

export default Navbar;
