import { createTheme } from "@mui/material";

 const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#202020',
        },
        secondary: {
          main: '#15d4be',
        },
        white: {
          main: '#fff',
        },
      }, 
})

theme.typography.h2 = {
  fontSize: "1.6rem",
  fontWeight: "700",
  color: "white",
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3.5rem",
  },
  "@media (min-width:2560px)": {
    fontSize: "4.5rem",
  },
};


export default theme