import React from "react";
// import ImagesCard from "./ImagesCard";
// import DescriptionCard from "./DescriptionCard";
// import CardHead from "./CardHead";
import ActionsButtonsCard from "./ActionsButtonsCard"
import { styled } from "@mui/system";
// import TypeandDataCard from "./TypeandDateCard";
import { Avatar, CardHeader, Typography, Card, CardContent } from "@mui/material";
import profileImg from "../../../img/profile2.jpg";
import { useEffect, useState } from "react";

const CardPer = styled(Card)(({ theme }) => ({


  borderRadius: '0px',
  [theme.breakpoints.up("md")]: {
    borderRadius: '30px',
    '&:first-child': { marginTop: '16px' },
    marginTop: '20px'
  },
}));



const CardMain = () => {

  const [feeds, setFeeds] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/routes')
      .then(response => response.json())
      .then(responseJson => setFeeds(responseJson))
  }, [])

  return (
    <>
      {feeds.map((feed) => (

        <CardPer>



          {/* //// Route name //// */}
          <CardHeader
            disableTypography
            sx={{
              backgroundColor: "secondary.main",
              color: "white.main",
            }}
            avatar={<Avatar src={profileImg}></Avatar>}
            title={
               /// route name
              <Typography
                component="p"
                variant="p"
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                  fontWeight: "800",
                  fontFamily: "Raleway",
                }}
              >
                {feed.routename}
              </Typography>
            }

            /// city ///////
            subheader={
              <Typography
                component="p"
                variant="p"
                sx={{ color: "white.main", fontFamily: "Nunito Sans", fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" } }}
              >
                Barcelona, Spain
              </Typography>
            }
          />

          {/* ////  description //// */}
          {/* {feeds.map((feed) => ( */}
          <CardContent sx={{ backgroundColor: '#fff', height: '40vh', overflowY: 'auto' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { sm: '15px', md: '15px', lg: '18px' }, paddingX: { xs: '0px', sm: '8px', lg: '20px' } }} >
              {feed.description}
            </Typography>
          </CardContent>
          {/* // ))} */}

          <CardContent sx={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: { lg: '30px' } }}>
            <Typography fontStyle='italic' variant="body2" color="text.secondary" sx={{ fontSize: { sm: '15px', md: '15px', lg: '18px' }, fontWeight: '700' }} >
              Route`s Type:

              {/* route type */}
              <Typography variant="spam" fontStyle='italic'>Mountain.

              {/* route length */}
              </Typography> <Typography variant="spam">5,5 Km</Typography>
            </Typography>
            <Typography color="text.secondary" variant="body2" sx={{ fontSize: { sm: '15px', md: '15px', lg: '18px' }, fontWeight: '700' }}>22/08/2022</Typography>
          </CardContent>

          <ActionsButtonsCard />
        </CardPer>
      ))} </>
  );
};

export default CardMain;
