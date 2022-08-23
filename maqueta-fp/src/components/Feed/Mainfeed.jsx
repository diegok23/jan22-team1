import Navbar from "./Navbar";
import Feed from "./Feed";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Banner from "./BannerSection/BannerMain";

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
    </Box>
  );
}

export default Mainfeed;
