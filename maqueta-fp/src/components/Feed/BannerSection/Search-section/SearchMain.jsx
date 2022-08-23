import { Box, Typography } from "@mui/material";
import InputSearch from "./InputSearch";

function SearchMain() {
  return (
    <Box mt="4%" display="flex" justifyContent="center">
      <Typography variant="h5" color="white.main" mr="15px" fontSize="1.6rem">
        en
      </Typography>
      <InputSearch />
    </Box>
  );
}

export default SearchMain;
