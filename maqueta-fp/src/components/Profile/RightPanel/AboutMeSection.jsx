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
import profileImg from "../../../img/profile-default.jpg"
import { useContext } from "react";
import { infoUserContext } from "../context/infoUserContext";
const AboutMeSection = () => {
  const dataContext = useContext(infoUserContext)
  const [open, setOpen] = useState(false);
  return (
    <ItemSup>
      
      <BoxAvatarMobile>
        <Box display="flex" justifyContent="center">
          <PopupChangePicture />
          <Avatar
            sx={{ width: "80px", height: "80px", marginTop: "70px" }}
            src={profileImg}
          ></Avatar>
        </Box>

        <Box display="flex" justifyContent="center" mt="10px">
          <Typography variant="h7" color="white.main">
          {dataContext[0].username}
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
            {dataContext[0].city}, {dataContext[0].country}
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
        {dataContext[0].description}
        </Typography>
      </Box>
    </ItemSup>
  );
};

export default AboutMeSection;
