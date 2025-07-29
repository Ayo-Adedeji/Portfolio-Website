import { Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <HeroSection/> }/>
      <Route path="/home" element= {<Home/>} />
    </Routes>
    
  );
}

export default App;
