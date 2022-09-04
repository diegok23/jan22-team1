import React from "react";
// import { Card } from "@mui/material";
// import ImagesCard from "./ImagesCard";
// import DescriptionCard from "./DescriptionCard";
// import CardHead from "./CardHead";
// import ActionsButtonsCard from "./ActionsButtonsCard"
// import TypeandDataCard from "./TypeandDateCard";
import { CardPer,  ButtonPer, CardContainer } from "./CardS.style";
import { Avatar, CardHeader, Typography, CardContent, Box, Checkbox, Link} from "@mui/material";
import profileImg from "../../../img/profile2.jpg";
import { useEffect, useState } from "react";
import { Directions, BookmarkBorder, Bookmark } from "@mui/icons-material";
import { } from "./CardS.style";


const CardMain = () => {



  // fetching data
  const [feeds, setFeeds] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/routes')
      .then(response => response.json())
      .then(responseJson => setFeeds(responseJson))
  }, [])

  return (
    <>
      {feeds.map(feed =>

        <CardPer>
          <CardHeader
            disableTypography
            sx={{
              backgroundColor: { xs: 'primary.main', md: 'secondary.main' },
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

            subheader={
              // country and city
              <Typography
                component="p"
                variant="p"
                sx={{ color: "white.main", fontFamily: "Nunito Sans", fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" } }}
              >
                {feed.country}{", "}{feed.city}
              </Typography>
            }
          />

          {/* Description */}
          <CardContent sx={{ backgroundColor: '#fff', height: '40vh', overflowY: 'auto' }}>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { sm: '15px', md: '15px', lg: '18px' }, paddingX: { xs: '0px', sm: '8px', lg: '20px' } }} >
              {feed.description}
            </Typography>
          </CardContent>
          <CardContent sx={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: { lg: '30px' } }}>
            {/* route type */}
            <Typography fontStyle='italic' variant="body2" color="text.secondary" sx={{ fontSize: { sm: '15px', md: '15px', lg: '18px' }, fontWeight: '700' }} >
              Route`s Type:
              <Typography variant="spam" fontStyle='italic'>
                {feed.routeType}

              </Typography>

              {/* Route length */}
              <Typography variant="spam">
                {feed.routelength}{'Km'}
              </Typography>
            </Typography>
            <Typography color="text.secondary" variant="body2" sx={{ fontSize: { sm: '15px', md: '15px', lg: '18px' }, fontWeight: '700' }}>
              {feed.created_at}
            </Typography>
          </CardContent>
          <CardContainer disableSpacing>
            <Box sx={{ display: "flex" }}>
              <ButtonPer
                startIcon={
                  <Checkbox
                    sx={{ padding: "0px" }}
                    icon={<BookmarkBorder sx={{ color: "white.main" }} />}
                    checkedIcon={<Bookmark sx={{ color: "yellow" }} />}
                  />
                }
              >
                Save
              </ButtonPer>
            </Box>

            <Box sx={{ display: "flex" }}>
              <ButtonPer startIcon={<Directions sx={{ color: "white.main" }}  />}>
                <Link href={feed.url}>Go to map </Link>
              </ButtonPer>
            </Box>
          </CardContainer>
        </CardPer>
      )}
    </>
  );
};

export default CardMain;
