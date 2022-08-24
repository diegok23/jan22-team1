import Navbar from "./NavBarLanding";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

function MainLanding() {
  return (
    <Box sx={{ width: "100%" }}>
      <Navbar />
      <Stack spacing={1} >
        <Section1 />
        <Section2 />
        <Section3 />
      </Stack>
    </Box>
  );
}

export default MainLanding;
