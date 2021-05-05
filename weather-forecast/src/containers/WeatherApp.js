import '../styles/WeatherApp.css'; 
import React, { useState } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import styled from 'styled-components';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [currentTime, setCurrentTime] = useState('');
  const [weather, setWeather] = useState({
    description: '',
    temperature: '',
    humidity: '',
    windSpeed: '',
  });


  return(
    <>
      <div>Search bar to be implemented</div>
      <Container>
        <CurrentWeather />
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
