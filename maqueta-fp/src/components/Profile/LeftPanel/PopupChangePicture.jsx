import { AvatarChangePicture, AvatarsForSelect, EditButton, PopupDescription, TextFieldStyled } from "../Profile.style";
import {Avatar, Box, Button, Modal, Typography} from "@mui/material";
import LocalSeeIcon from "@mui/icons-material/LocalSee";
import { useState } from "react";

const PopupChangePicture = () => {
    const [open, setOpen] = useState(false);
  return (
          <AvatarChangePicture>
            <Button onClick={(e) => setOpen(true)}>
              <LocalSeeIcon/>
            </Button>
            <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PopupDescription>
          <Box sx={{ borderBottom: "1px solid #D9D9D9" }}>
            <Typography variant="h4" color="secondary" textAlign="center" mt='10px' mb='10px'>
              Choose your avatar
            </Typography>
          </Box>
          
          <Box display='flex'  justifyContent='space-around' mt='10px' mb='10px'>
          <Button><AvatarsForSelect></AvatarsForSelect></Button>
          <Button><AvatarsForSelect></AvatarsForSelect></Button>
          <Button><AvatarsForSelect></AvatarsForSelect></Button>
          </Box>
          
          <Box display='flex' justifyContent='center'>
            <EditButton><Typography variant="h6" color='white.main'>Save</Typography></EditButton>
          </Box>
        </PopupDescription>
      </Modal>
          </AvatarChangePicture>

  );
};

export default PopupChangePicture;
