import { createFactory } from "react";
import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const WeatherLogo = styled.img`
width: 200px;
height: 200px;
margin: 40px auto;
animation: ease-in-out-infinite 1s;

@keyframes ease-in-out-infinite {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }



@media screen and (max-width: 500px) {
  margin: 60px auto;
  width: 120px;
height: 120px;
}

`;


const Searchbox = styled.form`
display: flex;
height: 3.5rem;
width: 5rem;
flex-direction: row;
font-size: 90px;
justify-content: center;
margin: 20px auto;

@media screen and (max-width: 500px) {
  width: 10px;
  
  
}


`;

const Input = styled.input.attrs({})`
height: 50px;
width: 200px;
border: none;
border-bottom: 2px solid;
border-color: white, 20%;
background: transparent;
animation: blink 1s linear infinite;
font-size: 20px;
box-shadow: 0px;
outline: none;
transition: 0.012s;
text-align: center;

@keyframes blink {
  0% {
    opacity: 2;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 100;
}

@media screen and (max-width: 500px) {
    width: 50px;
    
    
}


`;


const StyledButton = styled.button`
background: transparent;
border-color: transparent;
border-radius:20px;
font-size: 20px;
color: #000;
cursor: pointer;


&:hover {
    color: #000;

  }
`;


const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    const [searchResults, setSearchResults] = useState([]);
    const apiKey = 'YOUR_API_KEY';

    const handleInputChange = async (e) => {
        const query = e.target.value;
        updateCity(query);
        if (query.length > 2) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=30&appid=${apiKey}`);
            const data = await response.json();
            setSearchResults(data.list);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <>
            <WeatherLogo src="/img/icon.png" />
            <Searchbox onSubmit={fetchWeather}>
                <Input placeholder="Type City Name" onChange={handleInputChange} />
                <StyledButton type="submit">
                    <FontAwesomeIcon icon={faArrowRight} />
                </StyledButton>
            </Searchbox>
            <ResultsContainer>
                {searchResults.map((place) => (
                    <div key={place.id}>
                        {place.name}, {place.sys.country}
                    </div>
                ))}
            </ResultsContainer>
        </>
    );
};

export default CityComponent;
