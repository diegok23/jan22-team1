import React from "react";
import { Card } from "@mui/material";
import ImagesCard from "./ImagesCard";
import DescriptionCard from "./DescriptionCard";
import CardHead from "./CardHead";
import ActionsButtonsCard from "./ActionsButtonsCard"
import { styled } from "@mui/system";
import TypeandDataCard from "./TypeandDateCard";


const CardPer = styled(Card)(({ theme }) => ({
 
 
 borderRadius:'0px',
  [theme.breakpoints.up("md")]: {
    borderRadius:'30px',
    '&:first-child': { marginTop:'16px'},
    marginTop:'20px'
  },
}));


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
