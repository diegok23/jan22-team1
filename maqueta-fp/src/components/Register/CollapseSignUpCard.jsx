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
//import axios from "axios";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // let texto = JSON.stringify({
  //   name: name,
  //   email: email,
  //   password: password,
  //   password2: password2,
  // });
  function handleSubmit() {
    "handleSubmit is assigned a value but never used.";
    fetch("http://localhost:4000/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        password2: password2,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    //---------------AXIOS_TEST--------------//
    // POST request using axios with error handling
    // const article = {
    //  name: name,
    //  email: email,
    //  password: password,
    //  password2: password2, };
    // const headers = {"Content-Type": "application/json"};
    // axios.post('https://localhost:4000/users/signup', article, { headers })
    //     .then(response => this.setState({ articleId: response.data.id }))
    //     .catch(error => {
    //         this.setState({ errorMessage: error.message });
    //         console.error('There was an error!', error);
    //     });
  }

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
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: "600",
              fontFamily: "Nunito",
            }}
          >
            Create Cy
            <Typography
              variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}
            >
              Click
            </Typography>{" "}
            account
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontFamily: "Nunito",
              textAlign: "center",
            }}
          >
            Already have an account? Log in{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography
                variant="span"
                component="span"
                sx={{ color: "#15d4be", fontFamily: "Nunito" }}
              >
                here.
              </Typography>
            </Link>
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              "& .MuiInput-input": { color: "#fff" },
            }}
            noValidate
            autoComplete="off"
            // onSubmit={handleSubmit}
          >
            <ThemeProvider theme={theme}>
              <TextField
                required
                value={email}
                id="Email-Input"
                label="Email Address"
                variant="standard"
                color="primary"
                onChange={(e) => setEmail(e.target.value)}
                focused
              />
              <TextField
                required
                value={name}
                id="Name-Input"
                label="Username"
                variant="standard"
                color="primary"
                onChange={(e) => setName(e.target.value)}
                focused
              />
              <TextField
                value={password}
                id="Password-Input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                color="primary"
                onChange={(e) => setPassword(e.target.value)}
                focused
              />
              <TextField
                value={password2}
                id="Password2-Input"
                label="Confirm your password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                color="primary"
                onChange={(e) => setPassword2(e.target.value)}
                focused
              />
            </ThemeProvider>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                // type="submit"
                onClick={handleSubmit}
                size="small"
                sx={{
                  color: "#fff",
                  backgroundColor: "#15d4be",
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  fontSize: "0.7rem",
                }}
              >
                Create Account
              </Button>
            </CardActions>
          </Box>
        </CardContent>
        <Typography
          variant="p"
          component="p"
          sx={{
            fontSize: "0.4rem",
            textAlign: "center",
            mb: 1,
            mt: 2,
            pl: 6,
            pr: 6,
          }}
        >
          By creating an account you are accepting our{" "}
          <Typography
            variant="span"
            component="span"
            sx={{ color: "#15d4be", fontFamily: "Nunito" }}
          >
            Terms of Service
          </Typography>{" "}
          and{" "}
          <Typography
            variant="span"
            component="span"
            sx={{ color: "#15d4be", fontFamily: "Nunito" }}
          >
            Privacy Policy
          </Typography>{" "}
          . We may occasionally send you emails with product updates, and you
          can unsubscribe at any time.
        </Typography>
      </Card>
      );
    </Collapse>
  );
}
export default CollapseSignUpCard;
