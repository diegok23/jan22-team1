import { Item} from "../Profile.style";
import { Avatar, Box, Typography,Grid} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PopupChangePicture from "./PopupChangePicture";
import profileImg from "../../../img/profile-default.jpg"

const MainLP = ({data}) => {

  console.log(data);

  
  return (
    <Grid item xs={3} display={{xs:'none',sm:'none', md:'block'}}>
      <Item>
        
        <Box display="flex" justifyContent="center">
          <PopupChangePicture/>
          <Avatar
            sx={{ width: "200px", height: "200px", marginTop: "100px" }}
            src={profileImg}
          ></Avatar>
        </Box>

        <Box display="flex" justifyContent="center" mt="10px">
          <Typography variant="h4" color="white.main">
            Xun Li 
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mt="10px">
          <FmdGoodIcon color="secondary"></FmdGoodIcon>
          <Typography variant="h6" color="secondary" sx={{ fontSize: "1rem" }}>
            Spain, Barcelona
          </Typography>
        </Box>
      </Item>
    </Grid>
  );
};

export default MainLP;
