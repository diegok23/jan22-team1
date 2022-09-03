import { Box } from "@mui/system";
import { Input } from "../Signup.style";

function InputPassword() {
  return (
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
  );
}

export default InputPassword;
