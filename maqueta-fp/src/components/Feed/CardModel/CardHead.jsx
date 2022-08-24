import React from "react";
import {Avatar,CardHeader, Typography,} from "@mui/material";
import profileImg from "../../../img/profile2.jpg";

const CardHead = () => {
  return (
    <CardHeader
      disableTypography
      sx={{
        backgroundColor: "secondary.main",
        color: "white.main",
      }}
      avatar={<Avatar src={profileImg}></Avatar>}
      title={
        <Typography
          component="p"
          variant="p"
          sx={{
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
            fontWeight: "800",
            fontFamily: "Raleway",
          }}
        >
          Font Màgica, Parc de Montjuïc – Passeig Marítim del Bogatell Recorrido
          circular desde Selva de Mar
        </Typography>
      }
      subheader={
        <Typography
          component="p"
          variant="p"
          sx={{
            color: "white.main",
            fontFamily: "Nunito Sans",
            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
          }}
        >
          Barcelona, Spain
        </Typography>
      }
    />
  );
};

export default CardHead;
