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
              fontSize: { xs: "1.3rem" },
            }}
          >
            Welcome to Cy
            <Typography variant="span" color="white.main">
              click
            </Typography>
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
            color="white.main"
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
      </ContentContainer>
    
    </SectionContainer>
  );
}

export default Section1;
