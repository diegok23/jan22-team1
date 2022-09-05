import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {StyledToolbar,IconsBox,ButtonLogin,MobileIconsBox} from "./Navbar.style";
import { AppBar, Typography, Box, Avatar, Menu, MenuItem } from "@mui/material";
import { DirectionsBike, Logout, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PopupNewRoute from "./PopupCreateRoute";
import useUser from "../../hook/useUser";
import profileImg from "../../img/profile-default.jpg"

const NavBar = () => {
  const navigation = useNavigate();
  /*const isLogged = false*/
  const { isLogged, logout } = useUser();

  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    logout();
    navigation('/')
  };
  return (
    <>
      {isLogged ? (
        <AppBar position="fixed">
          <StyledToolbar variant="dense">
            <Link
              style={{ textDecoration: "none", color: "#15d4be" }}
              to="/feed"
            >
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
                    src={profileImg}
                  ></Avatar>
                </Link>
              </ButtonLogin>
              <ButtonLogin onClick={handleClick}>
               
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
              <Link
                style={{ textDecoration: "none", color: "#202020" }}
                to="/profile"
              >
                <MenuItem>Profile</MenuItem>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "#202020" }}
                to="/feed"
                onClick={handleClick}
              >
                <MenuItem>Logout</MenuItem>
              </Link>
            </Menu>
          </StyledToolbar>
        </AppBar>
      ) : (
        <AppBar position="fixed">
          <StyledToolbar variant="dense">
            <Link to='/' style={{textDecoration:'none', color:'#fff'}}>
            <Typography
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
              <ButtonLogin>
                <Typography variant="p">
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontFamily: "Raleway",
                    }}
                    to="/sign-up"
                  >
                    {" "}
                    Become a member
                  </Link>
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
      )}
    </>
  );
};

export default NavBar;
