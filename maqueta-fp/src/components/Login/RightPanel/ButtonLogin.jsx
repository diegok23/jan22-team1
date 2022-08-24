import { Typography } from "@mui/material";
import { LoginButton } from "../Login.style";


function ButtonLogin() {
  return (
    <LoginButton size="small" variant="contained">
    <Typography>Log in</Typography>
  </LoginButton>
  );
}

export default ButtonLogin;
