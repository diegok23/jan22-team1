import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Input, LoginButton } from '../Login.style';
import { signIn } from './fetchs';

function Inputs() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 /*  const [isSigned, setIsSigned] = useState(false);
  const [isSignError, setIsSignError] = useState(false);
 */
  const signInUser = async (e) => {
    e.preventDefault();
    const body = await signIn(email, password);
    console.log(body);
  };

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

      <LoginButton size="small" onClick={signInUser} variant="contained">
        <Typography>Log in</Typography>
      </LoginButton>
    </Box>
  );
}

export default Inputs;
