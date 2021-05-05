import React from 'react';
import styled from 'styled-components';

const CurrentWeather = ({ currentWeather }) => (
    <Container>
        <PrimaryInformationContainer>
            <WeatherIconBox>
                {/* Iconito */}
            </WeatherIconBox>
            <TemperatureLabel>72</TemperatureLabel>
        </PrimaryInformationContainer>
        <DescriptionLabel>Cloudy</DescriptionLabel>
        <SecondaryInformationContainer>
            <HumidityInformationBox>
                <label>Humidity</label>
                <label>45%</label>
            </HumidityInformationBox>
            <WindInformationBox>
                <label>Wind speed</label>
                <label>19.2 km/j</label>
            </WindInformationBox>
        </SecondaryInformationContainer>
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 600px;
    background-color: grey;
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
    background-color: red;
    height: 100%;
    width: 50%;
`;

const DescriptionLabel = styled.label`
    color: black;
    text-align: center;
    height: 10%;
    background-color: yellow;
`;

const TemperatureLabel = styled.label`
    color: black;
    text-align: center;
    background-color: green;
`;

const HumidityInformationBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    background-color: white;
`;

const WindInformationBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 50%;
    background-color: blue;
`;

export default CurrentWeather;

