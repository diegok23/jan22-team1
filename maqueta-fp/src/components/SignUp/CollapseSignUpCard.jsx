import React from "react";

import {
  Collapse,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  Box,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#15d4be",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function CollapseSignUpCard() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
      <CssBaseline />
      <Card
        sx={{ maxWidth: 345, background: "rgba(0,0,0,0.5)", color: "#fff" }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center', fontWeight:'600', fontFamily:'Nunito'}}>
           Create  Cy
            <Typography
              variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}
            >
              Click
            </Typography> account
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#fff", fontSize: "1rem", fontFamily: "Nunito", textAlign:'center'}}
          >
         Already have an account? Log in{" "}
         <Link to='/login' style={{textDecoration:'none'}}><Typography
              variant="span"
              component="span"
              
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}
            >
              here.
            </Typography></Link>
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              "& .MuiInput-input" : {color:'#fff'}
            }}
            noValidate
            autoComplete="off"
          >
            <ThemeProvider theme={theme}>
              <TextField
                required
                id="standard-read-only-input-email"
                label="Email Address"
                variant="standard"
                color="primary"
                focused
              />
                <TextField
                required
                id="standard-read-only-input-username"
                label="Username"
                variant="standard"
                color="primary"
                focused
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                color="primary"
                focused
              />
                <TextField
                id="standard-password-input"
                label="Confirm your password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                color="primary"
                focused
              />
            </ThemeProvider>
          </Box>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button size="small" sx={{ color: "#fff", backgroundColor: "#15d4be", fontFamily:'Nunito', fontWeight:'700', fontSize:'0.7rem' }}>
            Create Account
          </Button>
        </CardActions>
        <Typography variant="p" component="p" sx={{fontSize:'0.4rem', textAlign:'center', mb:1, mt:2, pl:6, pr:6, }}>By creating an account you are accepting our <Typography  variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}>Terms of Service</Typography>  and <Typography  variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}>Privacy Policy</Typography> . We may occasionally send you emails with product updates, and you can unsubscribe at any time.</Typography>
      </Card>
      );
    </Collapse>
  );
}
export default CollapseSignUpCard;
