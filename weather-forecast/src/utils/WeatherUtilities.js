import React from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiNA,
  WiDayCloudy,
  WiDaySunnyOvercast,
  WiDayRain,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from 'weather-icons-react';

export default function renderWeatherIcon(weatherDescription, size, color) {
  let weatherIcon;
  switch (weatherDescription) {
    case 'clear sky':
      weatherIcon = <WiDaySunny size={size} color={color} />;
      break;

    case 'few clouds':
      weatherIcon = <WiDaySunnyOvercast size={size} color={color} />;
      break;

    case 'scattered clouds':
      weatherIcon = <WiDayCloudy size={size} color={color} />;
      break;

    case 'broken clouds':
      weatherIcon = <WiCloudy size={size} color={color} />;
      break;

    case 'shower rain':
      weatherIcon = <WiDayRain size={size} color={color} />;
      break;

    case 'rain':
      weatherIcon = <WiRain size={size} color={color} />;
      break;

    case 'thunderstorm':
      weatherIcon = <WiThunderstorm size={size} color={color} />;
      break;

    case 'snow':
      weatherIcon = <WiSnow size={size} color={color} />;
      break;

    case 'mist':
      weatherIcon = <WiFog size={size} color={color} />;
      break;

    default:
      weatherIcon = <WiNA size={size} color={color} />;
      break;
  }
  return weatherIcon;
}
