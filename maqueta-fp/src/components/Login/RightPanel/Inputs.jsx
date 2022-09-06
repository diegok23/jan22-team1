import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Input, LoginButton } from "../Login.style";
import useUser from "../../../hook/useUser";
import { useNavigate } from "react-router-dom";

function Inputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLogged } = useUser();
  const navigation = useNavigate();
 

  useEffect(() => {
    if (isLogged) navigation("/feed");
  }, [isLogged, navigation]);

const handleClick = (e) =>{
  e.preventDefault()
  login({email, password})
  
}

  return (
    <Box>
      <Box>
        <Input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="standard-read-only-input"
          label="Email Address"
          variant="standard"
          color="secondary"
          focused
        />
      </Box>
      <Box>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          color="secondary"
          focused
        />
      </Box>

      <LoginButton onClick={handleClick} size="small" variant="contained">
        <Typography>Log in</Typography>
      </LoginButton>
    </Box>
  );
}

export default Inputs;
