import { createFactory } from "react";
import styled from "styled-components";


const WeatherLogo = styled.img`
width: 200px;
height: 200px;
margin: 40px auto;
`;

const ChooseCity = styled.span`
color: black;
font-size: 17px;
font-weight: bold;
font-family: 'Comic Neue', cursive;
`;
const Searchbox = styled.form`
display: flex;
height: 40px;
flex-direction: row;
color: white;
border: none;
margin: 20px auto;
font-family: 'Comic Neue', cursive;

&input{
    
    padding: 10px;
    font-size: 12px;
    border: 2px;
    outline: none;
    font-weight: bold;

}

& button{
    padding: 10px;
    font-size: 15px;
    font-weight: none;
    border: none;
    border-radius: 20px;
    outline: none;
    background: linear-gradient( to right, white, grey)}
    cursor: pointer;
    `;



const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;

    return (
        <>
        <WeatherLogo src = "/img/icon.png"/>
        <ChooseCity>Find weather of your city</ChooseCity>
        <Searchbox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e)=>updateCity(e.target.value)}/>
        <button type="submit">
        Search
        </button>
        

        </Searchbox>
        </>
    )
}
 
export default CityComponent;