import { List,Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ContainerFooter, Item, ItemsList } from "./Footer.style";
import {GitHub, Instagram, Twitter, Facebook} from '@mui/icons-material';

function FooterMain() {
  return (
    <ContainerFooter>
      <Item>
        <Box>
          {" "}
          <Typography
            color="white.main"
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Cy
            <Typography variant="h6" component="span" color="secondary">
              Click
            </Typography>
          </Typography>
        </Box>
        <Box sx={{display:'flex',  flexDirection:'column', paddingLeft:'20px'}}>
            <Box>
                <List sx={{display:'flex'}}>
                    <ItemsList>About</ItemsList>
                    <ItemsList>Contact</ItemsList>
                    <ItemsList>Career</ItemsList>
                    <ItemsList>Suport</ItemsList>
                </List>
            </Box>
            <Box>
                <Typography variant='p' color='white.main' sx={{fontSize:'10px', marginLeft:'10px'}}>©2022 CyClick. All rights reserved.</Typography>
            </Box>
        </Box>
      </Item>
      <Item> 
            <Box>
                <List sx={{display:'flex'}}>
                    <ItemsList><GitHub/></ItemsList>
                    <ItemsList><Instagram/></ItemsList>
                    <ItemsList><Twitter/></ItemsList>
                    <ItemsList><Facebook/></ItemsList>
                </List>
           
        </Box></Item>
    </ContainerFooter>
  );
}

export default FooterMain;
