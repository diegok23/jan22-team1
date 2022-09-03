import React from "react";
import { Box, Checkbox } from "@mui/material";
import { Directions, BookmarkBorder, Bookmark } from "@mui/icons-material";
import { ButtonPer, CardActionsPer } from "./Cards.style";

const ActionsButtonsCard = () => {
  return (
    <CardActionsPer disableSpacing>
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
    </CardActionsPer>
  );
};

export default ActionsButtonsCard;
