import Mainfeed from "./components/Feed/Mainfeed";
import MainLanding from "./components/Landing/MainLanding";
import MainLogin from "./components/Login/MainLogin";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./static/theme.js";
import MainSignUp from "./components/Sign-up/MainSignUp";
import MainProfile from "./components/Profile/MainProfile";
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/login" element={<MainLogin />} />
          <Route path="/feed" element={<Mainfeed />} />
          <Route path="/sign-up" element={<MainSignUp />} />
          <Route path="/profile" element={<MainProfile />} />
        </Routes>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
