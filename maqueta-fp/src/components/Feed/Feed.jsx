import React from "react";
import { Box } from "@mui/material";
import CardMain from "./CardModelNew/CardMain";

const Feed = () => {
  return (
    <Box
      sx={{
        color: "white.main",
      }}
      flex={4}
      paddingX={{ md: 5, lg: 10, xl: 10 }}
    >
      <CardMain />
    </Box>
  );
};

export default Feed;
