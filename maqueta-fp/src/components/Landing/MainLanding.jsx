import Navbar from "../Navbar/NavBar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Footer from "../Footer/FooterMain"

function MainLanding() {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Stack>
        <Section1 />
        <Section2 />
        <Section3 />
      </Stack>
      <Footer/>
    </Box>
  );
}

export default MainLanding;
