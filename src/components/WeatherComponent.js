import styled from "styled-components";


export const WeatherInfoIcons = {
    sunrise: "/img/sun.png",
    sunset: "/img/sunset.png",
    wind: "/img/wind.png",
    humidity: "/img/humidity.png",
    presure: "/img/presure.png",
};

/* ------ Style -----*/


const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: auto;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    margin: 30px auto;

`;

const Line =styled.hr`
color: rgba(0, 0, 0, 0.65);
margin: 5px 70px;
`;

const Condition = styled.span`

margin: 20px auto;
    font-size: 18px;
    
    & span{
        font-size: 50px;
    }

    @media screen and (max-width: 500px) {
    
        font-size: 20px;

    }


`;
const Logo = styled.img`
    margin-right: 70px;
    width: 200px;
    
    @media screen and (max-width: 500px) {
    
    width: 90px;
    margin-right: 0px;

    }

`;

const Location = styled.span`
    font-size: 30px;
    font-weight:bold;
    font-family: 'Yantramanav', sans-serif;
    @media screen and (max-width: 500px) {
    
        font-size: 15px;

    }
    

`;

const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 500px) {
    
        font-size: 5px;

    }
`;
const InfoContainer = styled.div`
    display: flex;
    width: fit;
    margin: 10px 50px;
    margin-left: 20%;

    padding-left: 50%
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 500px) {
    
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding:0px;
            margin: 5px;



    }
    
`;

const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
    @media screen and (max-width: 500px) {
    
        width: 20px;
        height:20px

    }
`;
const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin: 10px;
    font-family: 'Yantramanav', sans-serif;

    
    & span{
        font-size: 15px;
        text-transform: capitalize; 
        font-family: 'Comic Neue', cursive;

        @media screen and (max-width: 500px) {
            font-size: 15px;

        }

    }

    @media screen and (max-width: 500px) {

        font-size: 15px;
    }


    
`;

/* ------ Style END -----*/

 
const WeatherInfoComponent=(props)=>{

    const { name, value} = props;


    return(
    <InfoContainer>
        <InfoIcon src={WeatherInfoIcons[name] } />
        <InfoLabel>
            {value}
            <span>{name}</span>
        </InfoLabel>
    </InfoContainer>
    );

};


const WeatherComponent=(props)=>{
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp*1000
            ).getMinutes()}`;
    };
    
    return <>
    <WeatherCondition>
    <Condition>
        <span>{`${Math.floor(weather?.main?.temp -273)}°C`}</span>
        
        {` | ${weather?.weather[0].description}`}
    </Condition>
    <Logo src="/img/icon.png"/>
    </WeatherCondition>

    <Location>
    {`${weather?.name}, ${weather?.sys?.country}`}
        <Line />
        </Location>
    <WeatherInfoContainer>
        <WeatherInfoComponent
         name={isDay ? "sunset": "sunrise" } 
         value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
          />
        <WeatherInfoComponent name="humidity"  value={weather?.main?.humidity}/>
        <WeatherInfoComponent name="wind"  value={weather?.wind?.speed}/>
        <WeatherInfoComponent name="presure"  value={weather?.main?.pressure}/>


    </WeatherInfoContainer>
    

    </>
}
export default WeatherComponent;
 
