import React from "react";
import { Card } from "@mui/material";
import ImagesCard from "./ImagesCard";
import DescriptionCard from "./DescriptionCard";
import CardHead from "./CardHead";
import ActionsButtonsCard from "./ActionsButtonsCard";
import TypeandDataCard from "./TypeandDateCard";
import { CardPer } from "./Cards.style";

const CardProfile = () => {
  return (
    <CardPer>
      <CardHead />
      <DescriptionCard />
      <TypeandDataCard />
      <ActionsButtonsCard />
    </CardPer>
  );
};

export default CardProfile;
