import { Route , Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import {CartProvider} from "./CartContext";

function App() {
  return (
    <div className="App">
    <CartProvider>
    <Header></Header>
      <Routes>
        <Route path ='/'        element = {<Home/>} />
        <Route path = "checkout" element = {<Checkout/>} />
        <Route path = "*" element = {<Error/>} />
 </Routes>
 </CartProvider>
    </div>
  );
}

export default App;
