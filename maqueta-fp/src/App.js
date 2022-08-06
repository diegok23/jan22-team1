import Mainfeed from "./components/Feed/Mainfeed";
import MainLanding from "./components/Landing/MainLanding";
import MainLogin from "./components/Login/MainLogin";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLanding />}/>
      <Route path="/login" element={<MainLogin />}/>
      <Route path="/feed" element={<Mainfeed />}/>
      
    </Routes>
  );
}

export default App;
