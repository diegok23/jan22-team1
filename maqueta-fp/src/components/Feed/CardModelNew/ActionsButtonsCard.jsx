import { Box, Checkbox } from "@mui/material";
import { Directions, BookmarkBorder, Bookmark } from "@mui/icons-material";
import { ButtonPer, CardContainer } from "./CardS.style";

const ActionsButtonsCard = () => {
  return (
    <CardContainer disableSpacing>
      <Box sx={{ display: "flex" }}>
        <ButtonPer
          startIcon={
            <Checkbox
              sx={{ padding: "0px" }}
              icon={<BookmarkBorder sx={{ color: "white.main" }} />}
              checkedIcon={<Bookmark sx={{ color: "yellow" }} />}
            />
          }
        >
          Save
        </ButtonPer>
      </Box>

      <Box sx={{ display: "flex" }}>
        <ButtonPer startIcon={<Directions sx={{ color: "white.main" }} />}>
          Go to map
        </ButtonPer>
      </Box>
    </CardContainer>
  );
};

export default ActionsButtonsCard;
