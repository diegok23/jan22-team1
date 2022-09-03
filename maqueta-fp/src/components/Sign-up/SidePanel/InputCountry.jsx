import { Box } from "@mui/system";
import { useState } from "react";
import { InputDoubleLeft, InputDoubleRight } from "../Signup.style";

function InputCountry() {
  const [userCountry, setUserCountry] = useState("");
  const [userCity, setUserCity] = useState("");
  return (
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
  );
}

export default InputCountry;
