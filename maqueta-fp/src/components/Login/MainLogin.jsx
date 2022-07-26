import { Stack, Box } from "@mui/material";
import SidePanel from "./SidePanel";
import RightPanel from "./RightPanel/RightPanelMain";

function MainLogin() {
  return (
    <Box>
      <Stack direction="row" >
        <SidePanel />
        <RightPanel />
      </Stack>
    </Box>
  );
}

export default MainLogin;
