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
      <SearchBarContainer>
        <label>Your city</label>
        <SearchBarInput type='text' placeholder='London'></SearchBarInput>
        <SearchButton onClick={() => alert('Cumbia 420 pa lo negro')}>Search</SearchButton>
      </SearchBarContainer>
      <Container>
        <CurrentWeather />
        <Forecast />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 20px;
  display: flex;
  height: 400px;
  width: 1400px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  align-items: baseline;
`;

const SearchBarInput = styled.input`
  padding: grey;
  margin-left: 25px;
  margin-right: 25px;
  width: 100px;
  &:input:focus{
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const SearchButton = styled.button`
  border-radius: 3px;
`;

export default WeatherApp;
