import { Box } from "@mui/system";
import { useState } from "react";
import { InputDoubleLeft, InputDoubleRight } from "../Signup.style";

function InputName() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  return (
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
  );
}

export default InputName;
