import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Input, InputDoubleLeft, InputDoubleRight, SignUpButton } from "../Signup.style";
import { signUp } from '../../../static/signUp';

function Inputs() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  let body =''

  const signUpUser = async (e) => {
    e.preventDefault();
    body = await signUp(email, password, firstname, lastname, country, city,);
    console.log(body);
  };

  return (
    <Box>
      <Box>
        <Input
          value={email}
          onChange={(e) =>
            setEmail(console.log(`input result => ${e.target.value}`))
          }
          required
          id="standard-read-only-input"
          label="Email Address"
          variant="standard"
          color="secondary"
          focused
        />
      </Box>

      <Box display="flex" justifyContent="center">
      <InputDoubleLeft
        value={firstname}
        onChange={(e) =>
          setFirstName(console.log(`input result => ${e.target.value}`))
        }
        required
        id="standard-read-only-input-fn"
        label="First Name"
        variant="standard"
        color="secondary"
        focused
      />

      <InputDoubleRight
        value={lastname}
        onChange={(e) =>
          setLastName(console.log(`input result => ${e.target.value}`))
        }
        required
        id="standard-read-only-input-ln"
        label="Last Name"
        variant="standard"
        color="secondary"
        focused
      />
    </Box>

    <Box display="flex" justifyContent="center">
      <InputDoubleLeft
        value={country}
        onChange={(e) =>
          setCountry(console.log(`input result => ${e.target.value}`))
        }
        required
        id="standard-read-only-input-contry"
        label="Country"
        variant="standard"
        color="secondary"
        focused
      />

      <InputDoubleRight
        value={city}
        onChange={(e) =>
          setCity(console.log(`input result => ${e.target.value}`))
        }
        required
        id="standard-read-only-input-city"
        label="City"
        variant="standard"
        color="secondary"
        focused
      />
    </Box>

    <Box>
      <Input
      value={password}
      onChange={(e) =>
        setPassword(console.log(`input result => ${e.target.value}`))
      }
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        color="secondary"
        focused
      />


    </Box>

    <SignUpButton onClick={signUpUser} size="small" variant="contained">
    <Typography>Register</Typography>
  </SignUpButton>

    </Box>
  );
}

export default Inputs;
