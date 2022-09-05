import { Box,Typography } from "@mui/material";
import { GoButton, Section2Container, Content2Container } from "./Sections.style";
import { useNavigate } from "react-router-dom";


function Section2() {
  const navigation = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigation('/feed')
  };
  return (
    <Section2Container >
      <Content2Container>
        <Box>
          <Typography
            variant="h3"
            color="white.main"
            textTransform="uppercase"
            letterSpacing="0.3rem"
            sx={{ fontSize: { xs: "1rem",sm:'1.5rem', md: "3rem" }, fontWeight: "500" }}
          >
            Find{" "}
            <Typography
              variant="span"
              color="secondary"
              sx={{ fontWeight: "800" }}
            >
              the best cycling routes
            </Typography>{" "}
            in your city, just one click
          </Typography>
          
          <GoButton onClick={handleClick}>
              <Typography variant="h3"
            color="white.main"
            textTransform="uppercase"
            letterSpacing="0.3rem"
            sx={{ fontSize: { xs: "0.6rem",sm:'1rem', md: "2rem" }, fontWeight: "800" }}>
              Go to routes
                </Typography> 
          </GoButton>
        </Box>
      </Content2Container>
    </Section2Container >
  );
}

export default Section2;
