import React from "react";
import {
  Box,
  Button,
  CardActions,
  Checkbox,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  Directions,
  KeyboardArrowRight,
  Share,
  Star,
  StarBorder,
} from "@mui/icons-material";
import styled from "@emotion/styled";

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
const ButtonPer = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  marginLeft: "10px",
  borderRadius: "10px",
  color: theme.palette.white.main,
  fontSize: '0.7rem',
  fontWeight:'700',
  fontFamily:'Raleway',
  [theme.breakpoints.up("md")]: {
    fontSize: '0.8rem',
  }
 
}));
const ActionsButtonsCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "solid",
          borderWidth: "1px",
          borderColor: "#bdbdbd",
          backgroundColor: "primary.main",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <ButtonPer
            startIcon={
              <Checkbox
                sx={{ padding: "0px" }}
                icon={<StarBorder sx={{ color: "secondary.main" }} />}
                checkedIcon={<Star sx={{ color: "yellow" }} />}
              />
            }
          >
            Favorite
          </ButtonPer>

          <ButtonPer startIcon={<Share sx={{ color: "secondary.main" }} />}>
            Share
          </ButtonPer>

          <ButtonPer
            startIcon={<Directions sx={{ color: "secondary.main" }} />}
          >
            Go to map
          </ButtonPer>
        </Box>

        <Box sx={{ display: "flex" }}>
          <ButtonPer
            endIcon={<KeyboardArrowRight sx={{ color: "secondary.main" }} />}
          >
            See
          </ButtonPer>
        </Box>
      </CardActions>
    </ThemeProvider>
  );
};

export default ActionsButtonsCard;
