import { Search } from "@mui/icons-material";
import {
  SearchPer,
  SearchIconWrapper,
  StyledInputBase,
} from "../Banner.style.js";

function InputSearch() {
  return (
    <SearchPer>
      <SearchIconWrapper>
        <Search />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </SearchPer>
  );
}

export default InputSearch;
