import Navbar from "../Navbar/NavbarAuth";
import Feed from "./Feed";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Banner from "./BannerSection/BannerMain";
import Footer from "../Footer/FooterMain"

function Mainfeed() {
  return (
    <Box>
      <Navbar />
      <Stack
        marginTop="48px"
        direction="column"
        spacing={{ xs: 0, sm: 0, md: 4 }}
        backgroundColor="#202020"
      >
        <Banner />
        <Feed />
      </Stack>
      <Footer/>
    </Box>
  );
}

export default Mainfeed;
