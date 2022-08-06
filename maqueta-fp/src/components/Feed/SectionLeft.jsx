import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Box,
  Avatar,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import avatarImg from "../../img/elbicho.jpg";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DvrIcon from "@mui/icons-material/Dvr";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardInvitation from "./CardInvitations";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontFamily: "Nunito",
}));
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  height: "40px",
}));

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          justifyContent: "start",
          color: "#15d4be",
        },
      },
    },
  },
});

const MenuGridButtons = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#202020",
  borderColor: "#202020",
  width: "100%",

  fontFamily: ["Nunito"].join(","),
  "&:hover": {
    backgroundColor: "#15d4be",
    borderColor: "#15d4be",
    boxShadow: "none",
    color: "#fff",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
});

const buttons = [
  <ThemeProvider theme={theme}>
    <MenuGridButtons>
      <HomeIcon sx={{ fontSize: "1.2rem" }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "0.5rem",
          fontFamily: "Nunito",
          pt: "2px",
          ml: "7px",
          color: "#fff",
        }}
      >
        Home
      </Typography>
    </MenuGridButtons>

    <MenuGridButtons>
      <PeopleAltIcon sx={{ fontSize: "1.2rem" }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "0.5rem",
          fontFamily: "Nunito",
          pt: "2px",
          ml: "7px",
          color: "#fff",
        }}
      >
        People
      </Typography>
    </MenuGridButtons>

    <MenuGridButtons>
      <CameraAltIcon sx={{ fontSize: "1.2rem" }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "0.5rem",
          fontFamily: "Nunito",
          pt: "2px",
          ml: "7px",
          color: "#fff",
        }}
      >
        Photo
      </Typography>
    </MenuGridButtons>

    <MenuGridButtons>
      <DvrIcon sx={{ fontSize: "1.2rem" }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "0.5rem",
          fontFamily: "Nunito",
          pt: "2px",
          ml: "7px",
          color: "#fff",
        }}
      >
        News Feed
      </Typography>
    </MenuGridButtons>

    <MenuGridButtons>
      <PersonIcon sx={{ fontSize: "1.2rem" }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "0.5rem",
          fontFamily: "Nunito",
          pt: "2px",
          ml: "7px",
          color: "#fff",
        }}
      >
        Profile
      </Typography>
    </MenuGridButtons>

    <MenuGridButtons>
      <SettingsIcon sx={{ fontSize: "1.2rem" }} />
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "0.5rem",
          fontFamily: "Nunito",
          pt: "2px",
          ml: "7px",
          color: "#fff",
        }}
      >
        Settings
      </Typography>
    </MenuGridButtons>
  </ThemeProvider>,
];

export default function SectionLeft() {
  return (
    <React.Fragment>
      <Item
        sx={{
          pl: "20px",
          paddingY: "10px",
          mb: "20px",
          backgroundColor: "#202020",
        }}
      >
        <Grid item xs={15} sx={{ display: "flex" }}>
          {" "}
          <Avatar
            alt="Remy Sharp"
            src={avatarImg}
            sx={{ width: 40, height: 40 }}
          />
          <Div sx={{ backgroundColor: "#202020" }}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                fontFamily: "Nunito",
                fontSize: "0.6rem",
                textTransform: "capitalize",
                fontWeight: "800",
                textAlign: "start",
                color: "#15d4be",
              }}
            >
              Cristiano Ronaldo{" "}
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "Nunito",
                fontSize: "0.6rem",
                textTransform: "lowercase",
                textAlign: "start",
                color: "#fff",
              }}
            >
              @cristiano
            </Typography>
          </Div>
        </Grid>
      </Item>

      <ButtonGroup
        sx={{ boxShadow: "none", mb: "10px" }}
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        <Grid item xs={15}>
          {buttons}
        </Grid>
      </ButtonGroup>

      <Grid item xs={15}>
        <Div sx={{ display: "flex", mb: "10px" }}>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              fontFamily: "Nunito",
              fontSize: "1.2rem",
              textTransform: "capitalize",
              fontWeight: "800",
              textAlign: "start",
              color: "#15d4be",
            }}
          >
            Invitations
          </Typography>
        </Div>
      </Grid>

      <Box component="div" sx={{}}>
        <Item
          sx={{
            mb: "20px",
            backgroundColor: "#202020",
          }}
        >
          <Grid item xs={15} sx={{ overflow: "auto", maxHeight: "200px"}}>
            <CardInvitation />
            <CardInvitation />
            <CardInvitation />
          </Grid>
        </Item>
      </Box>
    </React.Fragment>
  );
}
