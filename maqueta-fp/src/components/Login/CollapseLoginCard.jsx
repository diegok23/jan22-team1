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

function CollapseLoginCard() {
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
            Log{" "}
            <Typography
              variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}
            >
              In
            </Typography>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "#fff", fontSize: "0.8rem", fontFamily: "Nunito" }}
          >
            Need a Cy
            <Typography
              variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}
            >
              Click
            </Typography>{" "}
            Account? Create an account{" "}
            <Link to='/signup' style={{textDecoration:'none'}}>
              <Typography
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
              sx={{input:{color:'secondary'}}}
                required
                id="standard-read-only-input"
                label="Email Address"
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
            </ThemeProvider>
          </Box>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button size="small" sx={{ color: "#fff", backgroundColor: "#15d4be", fontFamily:'Nunito', fontWeight:'700' }}>
            Log In
          </Button>
        </CardActions>
      </Card>
      );
    </Collapse>
  );
}
export default CollapseLoginCard;
