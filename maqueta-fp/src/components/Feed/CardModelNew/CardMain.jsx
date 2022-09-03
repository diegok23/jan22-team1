import React from "react";
import { Card } from "@mui/material";
import ImagesCard from "./ImagesCard";
import DescriptionCard from "./DescriptionCard";
import CardHead from "./CardHead";
import ActionsButtonsCard from "./ActionsButtonsCard"
import TypeandDataCard from "./TypeandDateCard";
import { CardPer } from "./CardS.style";

const CardMain = () => {
  return (
   <CardPer>
    <CardHead/> 
      <DescriptionCard />
      <TypeandDataCard/>
      <ActionsButtonsCard />
      </CardPer>
  );
};

export default CardMain;
