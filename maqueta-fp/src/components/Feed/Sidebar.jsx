import React from "react";
import {
  Avatar,
  Box,
  Checkbox,
  createTheme,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import {
  Star,
  Event,
  EmojiEvents,
  Person,
  DarkMode,
  DirectionsBike,
} from "@mui/icons-material";
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#15d4be",
    },
    white: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
});
const Sidebar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "white.main",
          color: "primary.main",
          display: { xs: "none", sm: "block" },
          height: "100%",
        }}
        flex={1}
        p={2}
      >
        <Box
          sx={{
            boxShadow: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "20px",
            paddingY: "50px",
            marginTop:'20px'
          }}
        >
          <Avatar
            sx={{ width: "150px", height: "150px" }}
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          ></Avatar>
          <Typography component="h3" variant="h4" sx={{ marginTop: "20px" }}>
            User Name
          </Typography>
        </Box>

        <Box sx={{ boxShadow: 3, borderRadius: "20px", marginTop:'30px' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="My Profile" />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Star />
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Event />
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItemButton>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEvents />
                </ListItemIcon>
                <ListItemText primary="Challenges" />
              </ListItemButton>
            </ListItem>
          </List>

          <ListItemButton>
            <ListItemIcon>
              <DirectionsBike />
            </ListItemIcon>
            <ListItemText primary="Type's Routes" />
          </ListItemButton>

          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="City"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Mountain"
                  />
                </FormGroup>
              </ListItemIcon>
            </ListItemButton>
          </List>

          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DarkMode />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
