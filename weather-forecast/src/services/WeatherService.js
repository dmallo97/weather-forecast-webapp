import axios from 'axios';

const apiKey = '567c0b8b6ffbc837f32042812441ec58';

export async function getCurrentWeatherByCity(city) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export async function getCurrentWeatherByCoords(coords) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=imperial`
  );
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export async function getForecastedTemperaturesByCity(city) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`
  );
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export async function getForecastedTemperaturesByCoords(coords) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=imperial`
  );
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export async function getForecastedDailyWeatherByCity(city) {
  const firstResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
  );
  if (firstResponse.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  const { lon } = firstResponse.data.coord;
  const { lat } = firstResponse.data.coord;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=imperial`
  );
  if (response.status !== 200) {
    throw new Error('We could not retrieve forecasted weather');
  }
  return response.data;
}

export async function getForecastedDailyWeatherByCoords(coords) {
  const lon = coords.longitude;
  const lat = coords.latitude;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=imperial`
  );
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export default {
  getCurrentWeatherByCity,
  getCurrentWeatherByCoords,
  getForecastedTemperaturesByCity,
  getForecastedTemperaturesByCoords,
  getForecastedDailyWeatherByCity,
  getForecastedDailyWeatherByCoords,
};
