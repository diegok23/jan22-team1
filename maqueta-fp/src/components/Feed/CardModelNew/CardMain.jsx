import React from "react";
import {
  Avatar,
  Box,
  CardContent,
  CardHeader,
  Checkbox,
  Link,
  Typography,
} from "@mui/material";
import { ButtonPer, CardContainer, CardPer } from "./CardS.style";
import { Bookmark, BookmarkBorder, Directions } from "@mui/icons-material";
import profileImg from "../../../img/profile-default.jpg";
import useUser from "../../../hook/useUser";
import PopupNoLogged from "./PopupNoLogged";
import PopupNoLoggedSave from "./PopupNoLoggedSave";
import ImagesCard from "./ImagesCard";
import { Search } from "@mui/icons-material";
import {
  SearchIconWrapper,
  SearchPer,
  StyledInputBase,
} from "../BannerSection/Banner.style";
import { useState } from "react";
import { useEffect } from "react";

const CardMain = () => {
  const { isLogged } = useUser();

  const [routes, setRoutes] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "http://localhost:4000/routes/";
/*GET ALL ROUTES*/
  const showRoutes = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setRoutes(data);
  };

  useEffect(() => {
    showRoutes();
  }, []);

  /*TO GET VALUE OF SEARCH INPUT */
  const searcher = (e) => {
    setSearch(e.target.value);
  };
  /*TO SEARCH A ROUTE BY TITLE, COUNTRY, CITY OR TYPE*/
  let resultSearch = [];
  if (!search) {
    resultSearch = routes;
  } else {
    resultSearch = routes.filter(
      (dato) =>
        dato.city.toLowerCase().includes(search.toLowerCase()) ||
        dato.city.toLowerCase().includes(search.toLowerCase()) ||
        dato.title.toLowerCase().includes(search.toLowerCase()) ||
        dato.type.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <>
      <Box position="absolute" top="350px" width="80%">
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h5"
            color="white.main"
            mr="15px"
            fontSize="1.6rem"
          >
            Search
          </Typography>
          <SearchPer>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={searcher}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </SearchPer>
        </Box>
      </Box>
        
      {resultSearch.map((item, index) => (
        <CardPer key={index}>
          <CardHeader
            disableTypography
            sx={{
              backgroundColor: { xs: "primary.main", md: "secondary.main" },
              color: "white.main",
            }}
            avatar={<Avatar src={profileImg}></Avatar>}
            title={
              <Typography
                component="p"
                variant="p"
                sx={{
                  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                  fontWeight: "800",
                  fontFamily: "Raleway",
                }}
              >
                {item.title}
              </Typography>
            }
            subheader={
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: "white.main",
                  fontFamily: "Nunito Sans",
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
                }}
              >
                {item.city}, {item.country} - by {item.created_by}
              </Typography>
            }
          />

          <ImagesCard />

          <CardContent
            sx={{ backgroundColor: "#fff", height: "20vh", overflowY: "auto" }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { sm: "15px", md: "15px", lg: "18px" },
                paddingX: { xs: "0px", sm: "8px", lg: "20px" },
              }}
            >
              {item.description}
            </Typography>
          </CardContent>

          <CardContent
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: { lg: "30px" },
            }}
          >
            <Typography
              fontStyle="italic"
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: { sm: "15px", md: "15px", lg: "18px" },
                fontWeight: "700",
              }}
            >
              Route`s Type:{" "}
              <Typography variant="spam" fontStyle="italic">
                {item.type}.
              </Typography>{" "}
              <Typography variant="spam">{item.distance} Km</Typography>
            </Typography>
            <Typography
              color="text.secondary"
              variant="body2"
              sx={{
                fontSize: { sm: "15px", md: "15px", lg: "18px" },
                fontWeight: "700",
              }}
            >
              {item.created_at}
            </Typography>
          </CardContent>

          <CardContainer disableSpacing>
            <Box sx={{ display: "flex" }}>
              {isLogged ? (
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
              ) : (
                <PopupNoLoggedSave />
              )}
            </Box>

            <Box sx={{ display: "flex" }}>
              {isLogged ? (
                <ButtonPer
                  startIcon={<Directions sx={{ color: "white.main" }} />}
                >
                  <Link href={`${item.url}`} target="_blank" rel="noopener">
                    Go to map
                  </Link>{" "}
                </ButtonPer>
              ) : (
                <PopupNoLogged />
              )}
            </Box>
          </CardContainer>
        </CardPer>
      ))}
    </>
  );
};

export default CardMain;
