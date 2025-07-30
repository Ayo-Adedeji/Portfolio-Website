import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/Main";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <Main  /> }/>
      <Route path="/home" element= {<Home/>} />
    </Routes>
    
  );
}

export default App;
