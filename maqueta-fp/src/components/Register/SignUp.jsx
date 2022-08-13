import * as React from "react";
import Box from "@mui/material/Box";
import bg from "../../img/fondo2.jpg";
import { CssBaseline } from "@mui/material";
import Header from "./Header";

export default function SignUp() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <CssBaseline />
      <Header />
    </Box>
  );
}
