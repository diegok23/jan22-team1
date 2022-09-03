import {Typography, Box } from "@mui/material";
import { ExpandCircleDownOutlined, Minimize } from "@mui/icons-material";
import { SectionContainer, ContentContainer, RightArrowBox, LeftArrowBox, MinimizeIconsBox } from "./Sections.style";


function Section1() {
  return (
    <SectionContainer>
      
      <LeftArrowBox>
        <ExpandCircleDownOutlined
          color="white"
          sx={{
            transform: "rotate(90deg)",
            fontSize: { xs: "40px", md: "80px" },
          }}
        />
      </LeftArrowBox>
     
      <RightArrowBox>
        <ExpandCircleDownOutlined
          color="secondary"
          sx={{
            transform: "rotate(-90deg)",
            fontSize: { xs: "40px", md: "80px" },
          }}
        />
      </RightArrowBox>

      <MinimizeIconsBox>
        <Minimize
          color="secondary"
          sx={{ fontSize: { xs: "40px", md: "80px" } }}
        />
        <Minimize color="white" sx={{ fontSize: { xs: "40px", md: "80px" } }} />
        <Minimize color="white" sx={{ fontSize: { xs: "40px", md: "80px" } }} />
      </MinimizeIconsBox>
      
      <ContentContainer>
        <Box>
          <Typography
            variant="h5"
            color="secondary.main"
            letterSpacing="0.1rem"
            sx={{
              fontFamily: "Raleway",
              fontWeight: "800",
              fontSize: { xs: "2rem", sm:'3rem', md:'6rem' },
            }}
          >
            Welcome to Cy
            <Typography variant="span" color="white.main">
              Click
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            color="white.main"
            textTransform="uppercase"
            letterSpacing="0.3rem"
            sx={{ fontSize: { xs: "1rem", sm:'1.5rem', md:'2rem' }, fontWeight:'600' }}
          >
            CYCLING ROUTES
          </Typography>
        </Box>
       
      </ContentContainer>
    
    </SectionContainer>
  );
}

export default Section1;
