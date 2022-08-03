import { Route , Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import ColorSchemesExample from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample/>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path= '*' element={<Error />}></Route>

                    </Routes>
    </div>
  );
}

export default App;
