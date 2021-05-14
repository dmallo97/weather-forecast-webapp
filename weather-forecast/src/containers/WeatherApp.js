import '../styles/WeatherApp.css';
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { debounce } from 'throttle-debounce';

import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
import {
  getCurrentWeatherByCity,
  getCurrentWeatherByCoords,
  getForecastedTemperaturesByCity,
  getForecastedTemperaturesByCoords,
  getForecastedDailyWeatherByCity,
  getForecastedDailyWeatherByCoords,
} from '../services/WeatherService';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [currentWeather, setCurrentWeather] = useState({
    time: '-',
    description: '-',
    mainDescription: '-',
    temperature: '-',
    humidity: '-',
    windSpeed: '-',
    icon: '-',
  });
  const dailyForecastStructure = new Array(4).fill(null).map(() => ({
    date: '-',
    description: '-',
    mainDescription: '-',
    humidity: '-',
  }));
  const [forecastedDays, setForecastedDays] = useState(dailyForecastStructure);
  /* const tempForecastStructure = () => {
    const structure = new Array(4);
    for (let i = 0; i < structure.length; i += 1) {
      structure[i] = Array.from({ length: 8 }, () => ({
        temperature: -1,
        timestamp: '-',
      }));
    }
    structure.map((slot, index) => {
      slot[index] = Array.from({ length: 8 }, () => ({
        temperature: -1,
        timestamp: '-',
      }));
      return slot[index];
    }); 
    return structure;
  }; */
  const [forecastedTemperatures, setForecastedTemperatures] = useState(
    new Array(4).fill(
      Array.from({ length: 8 }, () => ({
        temperature: -1,
        timestamp: '-',
      }))
    )
  );

  async function fetchCurrentWeather(coords = undefined) {
    let weatherData;
    if (coords) {
      weatherData = await getCurrentWeatherByCoords(coords);
    } else {
      weatherData = await getCurrentWeatherByCity(city);
    }
    setCurrentWeather({
      time: weatherData.dt,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      mainDescription: weatherData.weather[0].main,
      icon: weatherData.weather[0].icon,
      humidity: weatherData.main.humidity,
      windSpeed: weatherData.wind.speed,
    });
  }

  async function fetchForecastedWeather(coords = undefined) {
    let temperatureData;
    let dailyForecastData;
    if (coords) {
      temperatureData = await getForecastedTemperaturesByCoords(coords);
      dailyForecastData = await getForecastedDailyWeatherByCoords(coords);
    } else {
      temperatureData = await getForecastedTemperaturesByCity(city);
      dailyForecastData = await getForecastedDailyWeatherByCity(city);
    }
    console.log(forecastedTemperatures);
    const forecastedTempsDataCopy = [...forecastedTemperatures];
    let temperatureIncomingDataIndex = 0;
    for (let i = 0; i < forecastedTempsDataCopy.length; i += 1) {
      for (let j = 0; j < forecastedTempsDataCopy[0].length; j += 1) {
        const reading =
          temperatureData.list[temperatureIncomingDataIndex].main.temp;
        const readingTimestamp =
          temperatureData.list[temperatureIncomingDataIndex].dt_txt;
        forecastedTempsDataCopy[i][j].temperature = Math.ceil(reading);
        forecastedTempsDataCopy[i][j].timestamp = readingTimestamp;
        temperatureIncomingDataIndex += 1;
      }
    }
    setForecastedTemperatures(forecastedTempsDataCopy);
    const forecastedDaysCopy = [...forecastedDays];
    for (let i = 0; i < forecastedDaysCopy.length; i += 1) {
      if (i === 0) {
        forecastedDaysCopy[i].date = 'Today';
      } else {
        forecastedDaysCopy[i].date = dailyForecastData.daily[i].dt;
      }
      forecastedDaysCopy[i].description =
        dailyForecastData.daily[i].weather[0].description;
      forecastedDaysCopy[i].mainDescription =
        dailyForecastData.daily[i].weather[0].main;
      forecastedDaysCopy[i].humidity = dailyForecastData.daily[i].humidity;
    }
    setForecastedDays(forecastedDaysCopy);
  }

  function fetchWeatherForCurrentLocation(position) {
    fetchCurrentWeather(position.coords);
    fetchForecastedWeather(position.coords);
  }

  function errorWhileFetchingWeatherForCurrentLocation() {
    throw new Error('Unable to get your current location');
  }

  function handleGetLocationBtnClick() {
    if (!navigator.geolocation) {
      throw new Error('Your browser doesnt support this feature');
    }
    navigator.geolocation.getCurrentPosition(
      fetchWeatherForCurrentLocation,
      errorWhileFetchingWeatherForCurrentLocation
    );
  }

  function handleClickSearch() {
    // if (cityInput.length < 1) {
    //   return;
    // }
    // setCity(cityInput);
  }

  const debounceSetCity = debounce(2000, (input) => {
    setCity(input);
  });

  function handleCityInputChange(event) {
    debounceSetCity(event.target.value);
  }

  useEffect(() => {
    fetchCurrentWeather();
    fetchForecastedWeather();
  }, [city]);

  return (
    <>
      <SearchBarContainer>
        Your city
        <SearchBarInput
          id="cityInput"
          type="text"
          placeholder="London"
          onChange={(e) => handleCityInputChange(e)}
        />
        <SearchButton onClick={handleClickSearch}>Search</SearchButton>
        <SearchButton onClick={handleGetLocationBtnClick}>
          Get my location and search
        </SearchButton>
      </SearchBarContainer>
      <Container>
        <CurrentWeather currentWeather={currentWeather} />
        <Forecast
          forecastedDays={forecastedDays}
          forecastedTemperatures={forecastedTemperatures}
        />
      </Container>
    </>
  );
};

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
  &:input:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

const SearchButton = styled.button`
  border-radius: 3px;
`;

export default WeatherApp;
