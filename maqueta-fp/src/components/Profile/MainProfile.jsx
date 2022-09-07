import Navbar from "../Navbar/NavBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainLP from "./LeftPanel/MainLP";
import MainRP from "./RightPanel/MainRP";
import {InfoUserContextProvider} from './context/infoUserContext'

const MainProfile = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <InfoUserContextProvider>
      <Grid sx={{ backgroundColor: "#2B2B2B" }} container spacing={2}>
        <MainLP  />
        <MainRP />
      </Grid>
      </InfoUserContextProvider>
      
    </Box>
  );
};

export default MainProfile;
