import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";


const API_KEY = "be0078434739527e0af6036d2e11c3a0 ";

const Container = styled.div`
display : flex;
flex-direction : column;
text-align: center;
margin: auto auto auto auto;
box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
border-radius: 30px;
padding: 20px 10px;
width: 40rem;
background: #DFECC6;

@media screen and (max-width: 500px) {
  width: 240px;
  height: 380px;
}
`;



function App() {
  const [city, updateCity]= useState();
  const [weather, updateWeather]= useState();
 
  const fetchWeather = async(e) => {
    e.preventDefault();
    const response= 
     await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
    };

  return (
    <Container >
      {weather ? (
      
      <WeatherComponent weather={weather}/>) : (<CityComponent updateCity={updateCity}  fetchWeather={fetchWeather}/> )}
    </Container>
  );
}

export default App;
