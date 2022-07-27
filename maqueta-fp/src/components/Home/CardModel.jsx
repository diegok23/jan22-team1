import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';

export default function CardModel({inf, checked}) {
   
  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} >
    <Card sx={{ maxWidth: 345 ,background :'rgba(0,0,0,0.5)', margin: '60px', width:'500px'}}>
      <CardMedia
        component="img"
        height="240"
        image={inf.imgURL}
        alt="green iguana"
      />
      <CardContent  sx={{background :'rgba(0,0,0,0.3)'}}>
        <Typography gutterBottom variant="h5" component="div"  sx={{fontFamily:"Nunito", fontWeight:"bold", fontSize:"2rem", color:"#15d4be"}}>
          {inf.title}
        </Typography>
        <Typography variant="body2" color="text.secondary"  sx={{fontFamily:"Nunito", fontSize:"1rem", color : '#ddd'}}>
          {inf.description}
        </Typography>
      </CardContent>
    </Card>
    </Collapse>
  );
}
