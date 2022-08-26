import { Stack, Box } from "@mui/material";
import RightPanelMain from "./RightPanelMain";
import SidePanelMain from "./SidePanel/SidePanelMain";

function MainSignUp() {
  return (
    <Box>
      <Stack direction='row-reverse' >
        <RightPanelMain/>
        <SidePanelMain/>
      </Stack>
    </Box>
  );
}

export default MainSignUp;
