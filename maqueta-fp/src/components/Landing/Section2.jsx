import bg from "../../img/banner-section-2.JPG";
import { Box, InputBase, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import theme from '../../theme.js'

const Section = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100vh",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "	#000000 ",
    backgroundSize: "500px 400px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
}));
const ContentSection = styled(Paper)(({ theme }) => ({
  width: "50%",
  height: "20%",
  backgroundColor: "transparent",
  textAlign: "center",
  marginTop: "100px",
  marginLeft: "20px",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px",
    alignItems: "center",
    marginLeft: "0px",
  },
}));
const SearchPer = styled("div")({
  position: "relative",
  backgroundColor: "#fff",
  borderRadius: "35px",
  "& :hover": {
    backgroundColor: "rgb(21,212,190,0.6)",
    width: "100%",
    borderRadius: "35px",
  },
  width: "50%",
  marginLeft: "220px",
  marginTop: "30px",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    marginLeft: "130px",
  },
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
  color: theme.palette.primary.main,
  fontFamily: "Space Mono",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "1.7rem",
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
}));
function Section2() {
  return (
    <Section>
      <ContentSection sx={{ boxShadow: 0 }}>
        <Box>
          <Typography
            variant="h3"
            color="white.main"
            textTransform="uppercase"
            letterSpacing="0.3rem"
            sx={{ fontSize: { xs: "1rem", md: "3rem" }, fontWeight: "500" }}
          >
            Find{" "}
            <Typography
              variant="span"
              color="secondary"
              sx={{ fontWeight: "800" }}
            >
              the best cycling routes
            </Typography>{" "}
            in your city, with good people.
          </Typography>
          <SearchPer>
            <SearchIconWrapper>
              <Search
                sx={{
                  color: "secondary.main",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchPer>
        </Box>
      </ContentSection>
    </Section>
  );
}

export default Section2;
