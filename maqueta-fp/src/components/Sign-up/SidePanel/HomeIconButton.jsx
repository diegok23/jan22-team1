import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { BoxHomeIcon, ButtonHome } from "../Signup.style";

function HomeIconButton() {
  return (
    <BoxHomeIcon>
      <ButtonHome>
        <Link to="/">
          <HomeIcon
            color="secondary"
            sx={{
              fontSize: { xs: "30px", sm: "30px", md: "40px" },
              "& :hover": { color: "#fff" },
              marginTop: "5px",
            }}
          />
        </Link>
      </ButtonHome>
    </BoxHomeIcon>
  );
}

export default HomeIconButton;
