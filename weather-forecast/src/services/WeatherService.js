import axios from 'axios';

const apiKey = '567c0b8b6ffbc837f32042812441ec58';

export async function getCurrentWeather(city = undefined, coords = undefined) {
  let response;
  if (city) {
    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
  } else if (coords) {
    response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=imperial`);
  }
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export async function getForecastedTemperatures(city = undefined, coords = undefined) {
  let response;
  if (city) {
    response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`);
  } else if (coords) {
    response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${apiKey}&units=imperial`);
  }
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export async function getForecastedDailyWeather(city = undefined, coords = undefined) {
  let firstResponse;
  let lon;
  let lat;
  if (city) {
    firstResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
    lon = firstResponse.data.coord.lon;
    lat = firstResponse.data.coord.lat;
  } else if (coords) {
    lon = coords.longitude;
    lat = coords.latitude;
  }
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=imperial`);
  if (response.status !== 200) {
    throw new Error('You must type an existent city name');
  }
  return response.data;
}

export default { getCurrentWeather, getForecastedTemperatures, getForecastedDailyWeather };
