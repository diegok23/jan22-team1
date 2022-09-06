import Navbar from "../Navbar/NavBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainLP from "./LeftPanel/MainLP";
import MainRP from "./RightPanel/MainRP";
import { useState } from "react";
import { useEffect } from "react";

const MainProfile = () => {
  const URL = "http://localhost:4000";
  const [data, setData] = useState([]);
  const userId = window.sessionStorage.getItem("id");
  useEffect(() => {
    const getDataAwait = async () => {
      fetch(`${URL}/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {console.log(data) ; setData(data)} )
        .catch((error) => console.log(error));
    };

    getDataAwait();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Grid sx={{ backgroundColor: "#2B2B2B" }} container spacing={2}>
        <MainLP data={data} />
        <MainRP data={data} />
      </Grid>
    </Box>
  );
};

export default MainProfile;
