import { Box } from "@mui/system";
import { Input } from "../Signup.style";

function InputEmail() {
  return (
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
  );
}

export default InputEmail;
