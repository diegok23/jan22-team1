import { Box,Typography } from "@mui/material";
import { Content3Container, Section3Container } from "./Sections.style";

function Section3() {
  return (
      <Section3Container>
      <Content3Container >
          <Box width='100%'  >
            <Typography
              variant="h3"
              color="primary.main"
              textTransform="lowercase"
              letterSpacing="0.3rem"
              sx={{ fontSize: { xs: "1rem", md:'2.7rem', wordSpacing:{xs:'-0.1rem'} ,  letterSpacing:{xs:'0.1rem'}  }, fontWeight:'600'}}
            >
              why we choose <Typography variant='span' color='secondary' sx={{fontWeight:'800'}}>the best cycling routes</Typography> for you.
            </Typography>
            <Typography
              variant="h3"
              color="primary.main"
              textTransform="lowercase"
              letterSpacing="0.3rem"
              sx={{ fontSize: { xs: "0.8rem", md:'2rem' },wordSpacing:{xs:'-0.1rem'} ,  letterSpacing:{xs:'0.1rem'}, marginRight:{xs:'0px',md:'5%'} }}
            >
              why we choose the best cycling routes for you.
            </Typography>
          </Box>
        </Content3Container>
      </Section3Container>
  );
}

export default Section3;
