import bg from "../../img/banner-section-1.jpg";
import { Paper, Typography, Box } from "@mui/material";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { ExpandCircleDownOutlined, Minimize } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#15d4be",
    },
    white: {
      main: "#fff",
      light: "#BDBDBD",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
});
const Section = styled(Paper)(({ theme }) => ({
  position: "relative",
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  padding: theme.spacing(1),
  height: "100vh",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "	#000000",
    backgroundSize: "500px 400px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
}));

const ContentSection = styled(Paper)(({ theme }) => ({
  width: "30%",
  height: "20%",
  backgroundColor: "transparent",
  paddingRight: "20px",
  textAlign: "start",
  marginTop: "100px",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px",
    alignItems: "center",
  },
}));
function Section1() {
  return (
    <ThemeProvider theme={theme}>
      <Section>
        <Box sx={{ position: "absolute", top: "50%", left: "3%" }}>
          <ExpandCircleDownOutlined
            color="white"
            sx={{
              transform: "rotate(90deg)",
              fontSize: { xs: "40px", md: "80px" },
            }}
          />
        </Box>
        <Box sx={{ position: "absolute", top: "50%", right: "3%" }}>
          <ExpandCircleDownOutlined
            color="secondary"
            sx={{
              transform: "rotate(-90deg)",
              fontSize: { xs: "40px", md: "80px" },
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: {xs:"85%", md:'80%'},
            right: { xs: "35%", sm: "40%", md: "42%" },
          }}
        >
          <Minimize
            color="secondary"
            sx={{ fontSize: { xs: "40px", md: "80px" } }}
          />
          <Minimize
            color="white"
            sx={{ fontSize: { xs: "40px", md: "80px" } }}
          />
          <Minimize
            color="white"
            sx={{ fontSize: { xs: "40px", md: "80px" } }}
          />
        </Box>
        <ContentSection>
          <Box>
            <Typography
              variant="h5"
              color="secondary.main"
              letterSpacing="0.1rem"
              sx={{
                fontFamily: "Raleway",
                fontWeight: "800",
                fontSize: { xs: "1.3rem" },
              }}
            >
              Welcome to Cy<Typography variant="span" color='white.main'>click</Typography>
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h3"
              color="white.main"
              textTransform="uppercase"
              letterSpacing="0.3rem"
              sx={{ fontSize: { xs: "2rem" } }}
            >
              Lorem ipsum
            </Typography>
          </Box>
          <Box width="70%">
            <Typography
              variant="p"
              color="white.light"
              lineHeight="1.5rem"
              sx={{
                wordSpacing: "0.1rem",
                fontSize: { xs: "0.8rem", md: "1.2rem" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.Pariatur
              quod distinctio facere molestiae ducimus fugiatanimi explicabo
              asperiores veritatis recusandae optio provident impedit numquam
              quam, harum autem quibusdam ea ipsam.
            </Typography>
          </Box>
        </ContentSection>
      </Section>
    </ThemeProvider>
  );
}

export default Section1;
