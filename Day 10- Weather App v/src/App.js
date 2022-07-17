import { WiCloud } from "react-icons/wi";
import { useState , useEffect } from "react";


function App() {

  const [city , setCity ] = useState ("");
  const [search , setSearch] = useState ("Khatima");
  const userInputFuck = math.rand()

useEffect( () => {

  const fetchApi = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=445399e256c5118c9fb8f0263e3c8c90&units=metric';
    const response = await fetch(url);
    const resJson = await response.json();
    setCity(resJson.main)
    
  };

  fetchApi();

})
  return (
    <div className="app">
      <div className="WeatherBox">
        <div className="search">
          <input type="text"
          onChange={ (e) => {setSearch(e.target.value)}} />
        </div>
        <div className="temp-box">
        <div className="icon">
          <WiCloud/>
        </div>
        <div className="temp">
          <h1>21</h1>
        </div>
        </div>

        <div className="city">
          {/* <h1> {search} </h1> */}
        </div>
        <div className="features">
          <p>high temp</p>
          <p>wind speed</p>
          <p>low temp</p>
        </div>
      </div>
    </div>
  );
}

export default App;
