import React from "react";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, createTheme, IconButton, ThemeProvider, Typography } from "@mui/material";
import {Favorite, Share} from '@mui/icons-material';
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
    fontFamily: 'Nunito, sans-serif',
  },
});

const Feed = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          
          color: "white.main"
        }}
        flex={4}
        p={2}
      >
      <Card sx={{boxShadow:3, borderRadius:'30px'}} >
      <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
       
      </CardActions>
      
    </Card>
      </Box>
    </ThemeProvider>
  );
};

export default Feed;
