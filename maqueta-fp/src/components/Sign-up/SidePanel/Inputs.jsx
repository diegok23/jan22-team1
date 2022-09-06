import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {
  Input,
  InputDoubleLeft,
  InputDoubleRight,
  SignUpButton,
} from "../Signup.style";
import signUp from "../../../static/signUp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Inputs() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [accountStatus, setAccountStatus] = useState(false);
  let body = "";
  const navigation = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    body = await signUp({
      email,
      password,
      firstname,
      lastname,
      country,
      city,
    });
    body.isAuthenticated && setAccountStatus(true);
  };

  useEffect(() => {
    if (accountStatus) navigation("/login");
  }, [accountStatus, navigation]);


 
  return (
    <Box>
      <Box>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          id="standard-basic"
          label="Email Address"
          variant="standard"
          color="secondary"
          focused
          name="email"
        />
      </Box>

      <Box display="flex" justifyContent="center">
        <InputDoubleLeft
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          required
          id="standard-read-only-input-fn"
          label="First Name"
          variant="standard"
          color="secondary"
          focused
          name="firstname"
        />

        <InputDoubleRight
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          required
          id="standard-read-only-input-ln"
          label="Last Name"
          variant="standard"
          color="secondary"
          focused
          name="lastname"
        />
      </Box>

      <Box display="flex" justifyContent="center">
        <InputDoubleLeft
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          id="standard-read-only-input-contry"
          label="Country"
          variant="standard"
          color="secondary"
          focused
          name="country"
        />

        <InputDoubleRight
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          id="standard-read-only-input-city"
          label="City"
          variant="standard"
          color="secondary"
          focused
          name="city"
        />
      </Box>

      <Box>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          color="secondary"
          focused
          name="password"
        />
      </Box>

      <SignUpButton onClick={signUpUser} size="small" variant="contained">
        <Typography>Register</Typography>
      </SignUpButton>
    </Box>
  );
}

export default Inputs;
