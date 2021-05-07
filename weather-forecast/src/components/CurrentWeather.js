import React from 'react';
import styled from 'styled-components';
import { WiCloudy, WiFahrenheit } from 'weather-icons-react';

const CurrentWeather = ({ currentWeather }) => (
    <Container>
        <CurrentTimeLabel>Monday 5 21:30 ...</CurrentTimeLabel>
        <PrimaryInformationContainer>
            <WeatherIconBox>
                <WiCloudy size={290} color='#000' />
            </WeatherIconBox>
            <TemperatureInformationContainer>
                <TemperatureLabel>72</TemperatureLabel>
                <WiFahrenheit size={80} color='#000' />
            </TemperatureInformationContainer>
        </PrimaryInformationContainer>
        <DescriptionLabel>Cloudy</DescriptionLabel>
        <SecondaryInformationContainer>
            <HumidityInformationBox>
                <label>Humidity</label>
                <strong>45%</strong>
            </HumidityInformationBox>
            <WindInformationBox>
                <label>Wind speed</label>
                <strong>19.2 km/j</strong>
            </WindInformationBox>
        </SecondaryInformationContainer>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 600px;
    /*background-color: grey;*/
`;

const CurrentTimeLabel = styled.label`
    color: grey;
    text-align: center;
    /*background-color: white;*/
`;

const PrimaryInformationContainer = styled.div`
    display: flex;
    flex-direction: row; /* hace falta? hereda de container padre? */
    width: 100%;
    height: 70%;
`;

const SecondaryInformationContainer = styled.div`
    width: 100%;
    display: flex;
    height: 20%;
`;

const WeatherIconBox = styled.div`
    /*background-color: red;*/
    text-align: center;
    justify-content: center; /* no funca */
    align-items: center; /* idem */
    vertical-align: center; /* idem */
    height: 100%;
    width: 50%;
`;

const TemperatureInformationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    /*background-color: green;*/
    padding-right: -100px;
    position: relative;
    svg{
        position: absolute;
        top: 5em;
        right: 1em;
    }
`;

const DescriptionLabel = styled.strong`
    color: black;
    text-align: center;
    height: 10%;
    /*background-color: yellow;*/
    justify-content: center;
    font-size: 25px;
`;

const TemperatureLabel = styled.label`
    /*background-color: green;*/
    font-size: 130px;
    line-height: 1em;
`;

const HumidityInformationBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    background-color: white;
    text-align: center;
    vertical-align: middle; /* no funca ? */
    align-items: center; /* tampoco */
    justify-content: center; /* este si */
`;

const WindInformationBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    /*background-color: blue;*/
    text-align: center;
    justify-content: center; /* este si */
`;

export default CurrentWeather;

