import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Input, LoginButton } from "../Login.style";

function Inputs() {
  return (
    <Box>
      <Box>
        <Input
          required
          id="standard-read-only-input"
          label="Email Address"
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
    </Box>

    <LoginButton size="small" variant="contained">
    <Typography>Log in</Typography>
  </LoginButton>

    </Box>
  );
}

export default Inputs;
