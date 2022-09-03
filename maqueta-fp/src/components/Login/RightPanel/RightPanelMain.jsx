import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PanelRight, BoxInputs } from "../Login.style";
import ButtonLogin from "./ButtonLogin";
import HomeIconButton from "./HomeIconButton";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";

function RightPanelMain() {
  return (
    <PanelRight>
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
          Need a{" "}
          <Typography variant="span" sx={{ color: "secondary.main" }}>
            CyClick{" "}
          </Typography>{" "}
          account? Create an account{" "}
          <Typography variant="span" sx={{ color: "secondary.main" }}>
          <Link style={{textDecoration:'none', color:'#15d4be'}} to='/sign-up'>here</Link>
          </Typography>
        </Typography>

        <InputEmail />
        <InputPassword />
        <ButtonLogin />
      </BoxInputs>
    </PanelRight>
  );
}

export default RightPanelMain;
