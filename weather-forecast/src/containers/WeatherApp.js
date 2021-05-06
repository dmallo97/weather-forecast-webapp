import '../styles/WeatherApp.css'; 
import React, { useState } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import styled from 'styled-components';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [currentTime, setCurrentTime] = useState('');
  const [currentWeather, setCurrentWeather] = useState({
    description: '',
    temperature: '',
    humidity: '',
    windSpeed: '',
  });
  const [forecastedWeather, setForecastedWeather] = useState([{
    date: '',
    precipitationProbability: '',
    humidity: '',
    description: ''
  }])


  return(
    <>
      <label>Your city</label>
      <input type='text' placeholder='London'></input>
      <Container>
        <CurrentWeather />
        <Forecast />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 400px;
  width: 1400px;
`;

export default WeatherApp;
