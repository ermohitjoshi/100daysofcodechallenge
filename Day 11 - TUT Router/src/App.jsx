import React from "react";
import { Routes ,Route , NavLink }  from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

function App() {
  return (
    <div>
<Routes>
        <Route path ='/'        element = {<About/>} />
        <Route path = "contact" element = {<Contact/>} />
        <Route path = "*" element = {<Error/>} />
 </Routes>

<NavLink to="/contact"> Contact </NavLink> 
        
        
    </div>
  );
}

export default App;
