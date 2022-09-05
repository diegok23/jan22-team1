import React, { useState } from "react";
import { Avatar, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AvatarBecome, ButtonPer, NewAccountButton, PopupNoLoggedBox } from "./CardS.style";
import { Directions } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";

const PopupNoLogged = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonPer
        onClick={(e) => setOpen(true)}
        startIcon={<Directions sx={{ color: "white.main" }} />}
      >
        Go to map
      </ButtonPer>

      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PopupNoLoggedBox>
          <Box sx={{ borderBottom: "1px solid #D9D9D9" }}>
            <Typography
              variant="h4"
              color="secondary"
              textAlign="center"
              mt="10px"
              mb="10px"
            >
              Join Now!!
            </Typography>
          </Box>

          <Box mt="10px" mb="10px" display='flex' justifyContent='center'>
            <Typography
              variant="p"
              color="primary"
              textAlign="center"
              mt="10px"
              mb="10px"

            >
              Register or Login to have access to the route maps
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <NewAccountButton>
              <Link to="/login"  style={{ textDecoration: "none", color: "#FFF", fontFamily:'Raleway' }}>Register or Login</Link>
            </NewAccountButton>
          </Box>
          <Box sx={{ borderTop: "1px solid #D9D9D9", paddingX:'20px' }}>
            <Typography variant="h5">Become a member now</Typography>
            <Box><AvatarBecome><CheckIcon /></AvatarBecome></Box>
            <Box><AvatarBecome><CheckIcon /></AvatarBecome></Box>
            <Box><AvatarBecome><CheckIcon /></AvatarBecome></Box>
            <Box><AvatarBecome><CheckIcon /></AvatarBecome></Box>
          </Box>
        </PopupNoLoggedBox>
      </Modal>
    </>
  );
};

export default PopupNoLogged;
