import { Box } from "@mui/system";
import { useState } from "react";
import { Input } from "../Signup.style";

function InputEmail() {
  const [userEmail, setUserEmail] = useState("");

  return (
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
  );
}

export default InputEmail;
