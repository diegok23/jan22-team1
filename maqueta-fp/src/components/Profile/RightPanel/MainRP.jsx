import Grid from "@mui/material/Grid";
import AboutMeSection from "./AboutMeSection";
import CardsSection from "./CardsSection";
const MainRP = () => {
  return (
    <Grid item xs={12} md={9} >
      <AboutMeSection/>
      <CardsSection/>
    </Grid>
  );
};

export default MainRP;
