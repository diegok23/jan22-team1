import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LeftPanel, BoxInputs } from "../Signup.style";
import ButtonSignup from "./ButtonSignup";
import HomeIconButton from "./HomeIconButton";
import InputCountry from "./InputCountry";
import InputEmail from "./InputEmail";
import InputName from "./InputName";
import InputPassword from "./InputPassword";


function SidePanelMain() {
  return (
    <LeftPanel>
      <HomeIconButton />

      <BoxInputs>
        <Typography
          variant="h6"
          sx={{
            color: { xs: "white.main", sm: "secondary.main" },
            fontSize: "2.4rem",
            mt: { xs: "15px", sm: "0px" },
          }}
        >
          Cy
          <Typography
            variant="span"
            sx={{ color: "secondary.main", fontSize: "2.4rem" }}
          >
            Click
          </Typography>
        </Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: { xs: "0.9rem", sm: "1rem" },
            color: { xs: "white.main", sm: "black" },
          }}
        >
          If you already have a{" "}
          <Typography variant="span" sx={{ color: "secondary.main" }}>
            CyClick{" "}
          </Typography>{" "}
          account, log in{" "}
          <Typography variant="span" sx={{ color: "secondary.main" }}>
            <Link style={{textDecoration:'none', color:'#15d4be'}} to="/login"> here.</Link>
          </Typography>
        </Typography>
       
        <InputEmail />
        <InputName />
        <InputCountry/>
        <InputPassword />
        <ButtonSignup />
      
      </BoxInputs>
    </LeftPanel>
  );
}

export default SidePanelMain;
