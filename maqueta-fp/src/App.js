import Mainfeed from "./components/Feed/Mainfeed";
import MainLanding from "./components/Landing/MainLanding";
import MainLogin from "./components/Login/MainLogin";
import Carousel from "./components/carousel/TutorialCarousel";

//TO USE IN THE MEANWHILE AS A REGISTER FOR TESTING
import SignUp from "./components/Register/SignUp";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/login" element={<MainLogin />} />
      <Route path="/feed" element={<Mainfeed />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/cara" element={<Carousel />} />
    </Routes>
  );
}

export default App;
