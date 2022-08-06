import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import imgInvitation1 from '../../img/invitation1.jpg'
export default function CardInvitation() {
  return (
    <Card sx={{ maxWidth: 345, mb: "15px" }}>
      <CardMedia
        component="img"
        height="100"
        image={imgInvitation1}
        alt="green iguana"
      />
      <CardContent sx={{ backgroundColor: "#202020", padding:'5px' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontFamily: "Nunito", color: "#15d4be", fontSize:'1rem' }}
        >
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontFamily: "Nunito", color: "#fff" ,  fontSize:'0.5rem'}}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor:'#202020',justifyContent:'space-around'}}>
        <Button size="small" sx={{color:'#fff', fontSize:'0.4rem', backgroundColor:'#15d4be', fontFamily:'Nunito', fontWeight:'700'}}>Accept Invitation</Button>
        <Button size="small"  sx={{color:'#fff', backgroundColor:'#15d4be', minWidth:'20px'}}>
          <ClearIcon sx={{ fontSize:'0.8rem', color:'#fff'}} />
        </Button>
      </CardActions>
    </Card>
  );
}
