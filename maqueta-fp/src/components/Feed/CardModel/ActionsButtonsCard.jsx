import React from "react";
import {Box,Button,CardActions,Checkbox} from "@mui/material";
import { Directions, BookmarkBorder, Bookmark } from "@mui/icons-material";
import styled from "@emotion/styled";

const ButtonPer = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  marginLeft: "10px",
  borderRadius: "10px",
  color: theme.palette.white.main,
  fontSize: "0.7rem",
  fontWeight: "700",
  fontFamily: "Raleway",
  [theme.breakpoints.up("md")]: {
    fontSize: "0.8rem",
  },
}));
const ActionsButtonsCard = () => {
  return (
    <CardActions
      disableSpacing
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderTop: "solid",
        borderWidth: "1px",
        borderColor: "#bdbdbd",
        backgroundColor: "secondary.main",
      }}
    >
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
    </CardActions>
  );
};

export default ActionsButtonsCard;
