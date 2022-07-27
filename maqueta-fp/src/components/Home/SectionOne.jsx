import React from "react";
import Box from "@mui/material/Box";
import CardModel from "./CardModel";
import infCards from "../../static/cardHomeInf";
import useWindowPosition from "../../hook/useWindowPosition";

export default function SectionOne() {
    const checked =  useWindowPosition('header'); 
  return (
    <Box sx={{ minHeight: "100vh", display : ' flex' , justifyContent : 'center', alignItems : 'center'}}>
     <CardModel inf = {infCards[0]} checked = {checked} />
     <CardModel inf = {infCards[1]} checked = {checked} />
    </Box>
  );
}
