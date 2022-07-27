import React from 'react';
import { Collapse, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { useState,useEffect } from 'react'; 
function CollapseHome (){

    const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})}>
        <Box
          sx={{
            color: "#fff",
            fontSize: "1.2rem",
            textAlign: "center",
            marginTop: "220px",
            
          }}
        >
          <h1>
            Welcome to <br />
            Cy
            <Typography
              variant="span"
              component="span"
              sx={{ color: "#15d4be", fontFamily: "Nunito" }}
            >
              Click
            </Typography>
          </h1>
          <IconButton>
            <ExpandMoreIcon sx={{ color: "#15d4be", fontSize: "3rem" }} />
          </IconButton>
        </Box>
      </Collapse>
)
}
export default CollapseHome