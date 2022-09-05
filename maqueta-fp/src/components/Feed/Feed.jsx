import React from "react";
import { Box } from "@mui/material";
import CardMain from "./CardModelNew/CardMain";
import { useState } from "react";
import { useEffect } from "react";



  const Feed = () => {
const URL = "http://localhost:4000/routes/"
const [routes, setRoutes] = useState ([])

const getDataRoutes = (url => {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     setRoutes(data);
  });
})

useEffect (() => {
  getDataRoutes(URL)
},[])

  return (
    <Box
      sx={{
        color: "white.main"
      }}
      flex={4}
      paddingX={{ md: 5, lg: 10, xl: 10 }}
    >
      <CardMain routes={routes} />
    </Box>
  );
};

export default Feed;
