import { Box, InputBase, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";

const SearchPer = styled("div")({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "15px",
  "& :hover": {
    backgroundColor: "rgb(163,163,163,0.25)",
    width: "100%",
    borderRadius: "15px",
  },
  width: "30%",
  marginRight: "10px",
});
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "0.8rem",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
}));

function BannerSearch() {
  return (
    <Box mt='4%' display='flex' justifyContent='center'>

<Typography variant="h5" color='white.main' mr='15px' fontSize='1.6rem'>en</Typography>
      <SearchPer>
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>

        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchPer>
    </Box>
  );
}

export default BannerSearch;
