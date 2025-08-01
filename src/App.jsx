import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/Main";
import BackToTopButton from "./components/BackToTopButton";
import ConstructionAlert from "./components/ConstructionAlert";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Main  /> }/>
      <Route path="/home" element= {<Home/>} />
    </Routes>
    <ConstructionAlert/>
    <BackToTopButton/>
    </>
  );
}

export default App;
