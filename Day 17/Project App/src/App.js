import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CheckOut from "./Pages/CheckOut";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        <Route path="/Home" element={ <Home/> } />
        <Route path="checkout" element={ <CheckOut/> } />
      </Routes>
      </Navbar>
    </div>
  );
}

export default App;
