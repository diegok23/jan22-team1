import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import bg from "../../img/banner-section-3.JPG";

const Section = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  padding: theme.spacing(1),
  textAlign: "center",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "	#DEDEDE",
    backgroundSize: "500px 300px",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
}));

const ContentSection = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "20%",
  backgroundColor: "transparent",
  textAlign: "center",
  marginTop: "50px",
  marginLeft: "20px",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    alignItems: "center",
    marginLeft: "0px",
    marginTop: "50px",
  },
}));

function Section3() {
  return (
    <Section>
      <ContentSection sx={{ boxShadow: 0 }}>
        <Box width="100%">
          <Typography
            variant="h3"
            color="primary.main"
            textTransform="lowercase"
            letterSpacing="0.3rem"
            sx={{
              fontSize: {
                xs: "1rem",
                md: "2.7rem",
                wordSpacing: { xs: "-0.1rem" },
                letterSpacing: { xs: "0.1rem" },
              },
              fontWeight: "600",
            }}
          >
            why we choose{" "}
            <Typography
              variant="span"
              color="secondary"
              sx={{ fontWeight: "800" }}
            >
              the best cycling routes
            </Typography>{" "}
            for you.
          </Typography>
          <Typography
            variant="h3"
            color="primary.main"
            textTransform="lowercase"
            letterSpacing="0.3rem"
            sx={{
              fontSize: { xs: "0.8rem", md: "2rem" },
              wordSpacing: { xs: "-0.1rem" },
              letterSpacing: { xs: "0.1rem" },
              marginRight: { xs: "0px", md: "5%" },
            }}
          >
            why we choose the best cycling routes for you.
          </Typography>
        </Box>
      </ContentSection>
    </Section>
  );
}

export default Section3;
