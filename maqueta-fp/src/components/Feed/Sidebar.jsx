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
          display: { xs: "none", md: "block" },
        }}
        flex={1}
        p={2}
        mt={2}
      >
        <Box width="14.2%" position="fixed">
          <Box
            sx={{
              boxShadow: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "20px",
              paddingY: "40px",
              backgroundColor: "primary.main",
            }}
          >
            <Avatar
              sx={{
                width: { sm: "80px", lg: "120px", xl: "150px" },
                height: { sm: "80px", lg: "120px", xl: "150px" },
                border: "solid",
                borderWidth: "4px",
                borderColor: "white.main",
              }}
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            ></Avatar>
            <Typography
              component="h3"
              variant="h4"
              sx={{
                marginTop: "20px",
                fontSize: { sm: "1rem", lg: "2rem", xl: "2.5rem" },
                fontWeight: "500",
                fontFamily: "Raleway",
                color: "secondary.main",
              }}
            >
              Xun Li
            </Typography>
          </Box>

          <Box sx={{ boxShadow: 3, borderRadius: "20px", marginTop: "30px", backgroundColor:'primary.main' }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Person sx={{color:'secondary.main'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Profile"
                    disableTypography
                    sx={{
                      fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Star sx={{color:'secondary.main'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Favorites"
                    disableTypography
                    sx={{
                      fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' },
                    }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Event sx={{color:'secondary.main'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Events"
                    disableTypography
                    sx={{
                      fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmojiEvents sx={{color:'secondary.main'}} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Challenges"
                    disableTypography
                    sx={{
                      fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' },
                    }}
                  />
                </ListItemButton>
              </ListItem>

              <ListItemButton>
                <ListItemIcon>
                  <DirectionsBike sx={{color:'secondary.main'}} />
                </ListItemIcon>
                <ListItemText
                  primary="Routes' Type"
                  disableTypography
                  sx={{ fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' } }}
                />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <FormGroup>
                    <FormControlLabel
                    
                      disableTypography
                      sx={{
                        fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' },
                        fontWeight: "600",
                      }}
                      control={<Checkbox defaultChecked />}
                      label="City"
                    />
                    <FormControlLabel
                      disableTypography
                      sx={{
                        fontSize: { sm: "0.7rem", lg: "1rem", xl: "1.5rem", color:'white' },
                        fontWeight: "600",
                      }}
                      control={<Checkbox defaultChecked />}
                      label="Mountain"
                    />
                  </FormGroup>
                </ListItemIcon>
              </ListItemButton>

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
      </Box>
    </ThemeProvider>
  );
};

export default Sidebar;
