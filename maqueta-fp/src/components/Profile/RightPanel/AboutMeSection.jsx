import {
  BoxAvatarMobile,
  ButtonEdit,
  EditButton,
  ItemSup,
  PopupDescription,
  TextFieldStyled,
} from "../Profile.style";
import CreateIcon from "@mui/icons-material/Create";
import { Avatar, Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import PopupChangePicture from "../LeftPanel/PopupChangePicture";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const AboutMeSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <ItemSup>
      
      <BoxAvatarMobile>
        <Box display="flex" justifyContent="center">
          <PopupChangePicture />
          <Avatar
            sx={{ width: "80px", height: "80px", marginTop: "70px" }}
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
          ></Avatar>
        </Box>

        <Box display="flex" justifyContent="center" mt="10px">
          <Typography variant="h7" color="white.main">
            Xun Li
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt="10px">
          <FmdGoodIcon
            sx={{ fontSize: "0.6rem" }}
            color="secondary"
          ></FmdGoodIcon>
          <Typography
            variant="h7"
            color="secondary"
            sx={{ fontSize: "0.5rem" }}
          >
            Spain, Barcelona
          </Typography>
        </Box>
      </BoxAvatarMobile>
      
      <Box sx={{margin:{xs:'0px 20px 0px 20px', sm:'0px 20px 0px 20px'}}}>
        <ButtonEdit onClick={(e) => setOpen(true)}>
          <CreateIcon sx={{fontSize:'15px'}} />
          <Typography
            variant="h7"
            sx={{ marginLeft: "5px", fontSize: { xs: "10px", md: "18px" } }}
          >
            Edit
          </Typography>
        </ButtonEdit>
        <Modal
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <PopupDescription>
            <Box sx={{ borderBottom: "1px solid #D9D9D9" }}>
              <Typography
                variant="h4"
                color="secondary"
                textAlign="center"
                mt="10px"
                mb="10px"
              >
                About me
              </Typography>
            </Box>
            <Box>
              <TextFieldStyled
                id="outlined-multiline-static"
                label=""
                multiline
                rows={6}
                defaultValue=""
                variant="filled"
                color="white"
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <EditButton>
                <Typography variant="h6" color="white.main">
                  Save
                </Typography>
              </EditButton>
            </Box>
          </PopupDescription>
        </Modal>

        <Typography
          variant="body2"
          color="white.main"
          sx={{
            fontSize: { xs: "10px", sm: "15px", md: "15px", lg: "18px" },
            paddingX: {
              xs: "0px",
              sm: "8px",
              md: "20px",
              lg: "100px",
              fontStyle: "italic",
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          quisquam saepe velit obcaecati quasi voluptatum quos beatae eaque quo
          earum numquam possimus ratione expedita quas, pariatur, sunt non
          distinctio voluptas.
        </Typography>
      </Box>
    </ItemSup>
  );
};

export default AboutMeSection;
