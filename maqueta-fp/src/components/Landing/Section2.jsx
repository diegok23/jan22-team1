import { Box,Typography } from "@mui/material";
import { GoButton, Section2Container, Content2Container } from "./Sections.style";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <Section2Container >
      <Content2Container>
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
            in your city, just one click
          </Typography>
          
          <GoButton>
            <Link to='/feed'>
              Go to routes
            </Link>
          </GoButton>
        </Box>
      </Content2Container>
    </Section2Container >
  );
}

export default Section2;
