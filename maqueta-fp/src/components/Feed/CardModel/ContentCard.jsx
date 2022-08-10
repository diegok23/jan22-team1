import React from "react";
import {
  CardContent,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

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

const ContentCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardContent sx={{backgroundColor:'#fff'}}>
        <Typography variant="body2" color="text.secondary">
          Paseo dificil en bici, se necesita muy buena forma fisica. Pistas
          pavimentadas en su mayoria. El punto de inicio de la ruta es accesible
          en transporte público.
        </Typography>
      </CardContent>
    </ThemeProvider>
  );
};

export default ContentCard;
