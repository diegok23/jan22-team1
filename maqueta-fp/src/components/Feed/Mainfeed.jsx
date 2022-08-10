import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";

function Mainfeed() {
  return (
    <Box>
      <Navbar />
      <Stack
        marginTop="42px"
        direction="row"
        spacing={{ xs: 0, sm: 0, md: 2 }}
        justifyContent="space-between"
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default Mainfeed;
