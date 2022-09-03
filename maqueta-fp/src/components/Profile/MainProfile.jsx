import Navbar from "../Navbar/NavbarAuth";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainLP from "./LeftPanel/MainLP";
import MainRP from "./RightPanel/MainRP";


const MainProfile = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Navbar />
      <Grid   sx={{ backgroundColor:'#2B2B2B'}}  container spacing={2}>
       <MainLP/> 
       <MainRP/> 
      </Grid>
    </Box>
  );
}

export default MainProfile