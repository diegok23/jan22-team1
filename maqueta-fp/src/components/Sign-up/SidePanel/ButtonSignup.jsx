import { Typography } from "@mui/material";
import { SignUpButton } from "../Signup.style";


function ButtonSignup() {
  return (
    <SignUpButton size="small" variant="contained">
    <Typography>Register</Typography>
  </SignUpButton>
  );
}

export default ButtonSignup;
