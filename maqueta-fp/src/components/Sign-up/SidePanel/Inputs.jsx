import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Input, InputDoubleLeft, InputDoubleRight, SignUpButton } from "../Signup.style";

function Inputs() {
  const [userEmail, setUserEmail] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");

  return (
    <Box>
      <Box>
        <Input
          value={userEmail}
          onChange={(e) =>
            setUserEmail(console.log(`input result => ${e.target.value}`))
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
        value={userFirstName}
        onChange={(e) =>
          setUserFirstName(console.log(`input result => ${e.target.value}`))
        }
        required
        id="standard-read-only-input-fn"
        label="First Name"
        variant="standard"
        color="secondary"
        focused
      />

      <InputDoubleRight
        value={userLastName}
        onChange={(e) =>
          setUserLastName(console.log(`input result => ${e.target.value}`))
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
        value={userCountry}
        onChange={(e) =>
          setUserCountry(console.log(`input result => ${e.target.value}`))
        }
        required
        id="standard-read-only-input-contry"
        label="Country"
        variant="standard"
        color="secondary"
        focused
      />

      <InputDoubleRight
        value={userCity}
        onChange={(e) =>
          setUserCity(console.log(`input result => ${e.target.value}`))
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
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        color="secondary"
        focused
      />

<Input
        id="standard-password-confirm-input"
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        color="secondary"
        focused
      />
    </Box>

    <SignUpButton size="small" variant="contained">
    <Typography>Register</Typography>
  </SignUpButton>

    </Box>
  );
}

export default Inputs;
