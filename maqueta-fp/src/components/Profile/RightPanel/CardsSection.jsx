import {ButtonMyCards, ButtonSavedCards, ItemInf } from "../Profile.style";
import { Box, Typography } from "@mui/material";
import CardProfile from "./CardModel/CardProfile";
import { DirectionsBike, Bookmark } from "@mui/icons-material";

const CardsSection = () => {
  return (
    <ItemInf>
      <Box display="flex" justifyContent="space-around" sx={{borderTop:'1px solid #D9D9D9'}}>
        <ButtonSavedCards>
          <DirectionsBike />
          <Typography variant="h7" sx={{ marginLeft: "5px", fontSize: "18px" }}>
            My Routes
          </Typography>
        </ButtonSavedCards>
        <ButtonMyCards>
          <Bookmark />
          <Typography variant="h7" sx={{ marginLeft: "5px", fontSize: "18px" }}>
            Saved
          </Typography>
        </ButtonMyCards>
      </Box>
      <Box display='flex' flexDirection='column' alignItems='center' >
      <CardProfile />
      <CardProfile />
      </Box>
    </ItemInf>
  );
};

export default CardsSection;
