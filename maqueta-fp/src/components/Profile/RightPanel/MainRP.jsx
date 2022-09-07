import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { useState } from "react";
import { infoUserContext } from "../context/infoUserContext";
import AboutMeSection from "./AboutMeSection";
import CardsSection from "./CardsSection";
const MainRP = () => {
  const dataContext = useContext(infoUserContext)
  console.log(dataContext);
  
  return (
    
    <Grid item xs={12} md={9} >
      <AboutMeSection />
      <CardsSection/>
    </Grid>
  );
};

export default MainRP;
