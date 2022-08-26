import { Box } from "@mui/system";
import { InputDoubleLeft, InputDoubleRight } from "../Signup.style";

function InputName() {
  return (
    <Box display='flex' justifyContent='center' >
        <InputDoubleLeft
        required
        id="standard-read-only-input"
        label="First Name"
        variant="standard"
        color="secondary"
        focused
      />

<InputDoubleRight
        required
        id="standard-read-only-input"
        label="Last Name"
        variant="standard"
        color="secondary"
        focused
      />
    </Box>
  );
}

export default InputName;
