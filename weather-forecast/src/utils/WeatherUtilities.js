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
  WiDayCloudyHigh,
  WiRainMix,
  WiDayShowers,
  WiShowers,
  WiDaySprinkle,
  WiDayThunderstorm,
  WiDaySleet,
  WiSleet,
  WiDaySnow,
} from 'weather-icons-react';

export default function renderWeatherIcon(
  weatherMainDescription,
  weatherDescription,
  size,
  color
) {
  let weatherIcon;
  switch (weatherMainDescription) {
    case 'Clear':
      weatherIcon = <WiDaySunny size={size} color={color} />;
      break;

    case 'Clouds':
      switch (weatherDescription) {
        case 'overcast clouds':
          weatherIcon = <WiDaySunnyOvercast size={size} color={color} />;
          break;

        case 'scattered clouds':
          weatherIcon = <WiDayCloudy size={size} color={color} />;
          break;

        case 'broken clouds':
          weatherIcon = <WiCloudy size={size} color={color} />;
          break;

        default:
          weatherIcon = <WiDayCloudyHigh size={size} color={color} />;
          break;
      }
      break;
    case 'Rain':
      switch (weatherDescription) {
        case 'freezing rain':
          weatherIcon = <WiRainMix size={size} color={color} />;
          break;

        case 'light rain':
          weatherIcon = <WiDayRain size={size} color={color} />;
          break;

        case 'light intensity shower rain':
          weatherIcon = <WiDayShowers size={size} color={color} />;
          break;

        case 'shower rain':
          weatherIcon = <WiShowers size={size} color={color} />;
          break;

        default:
          weatherIcon = <WiRain size={size} color={color} />;
          break;
      }
      break;

    case 'Drizzle':
      weatherIcon = <WiDaySprinkle size={size} color={color} />;
      break;

    case 'Thunderstorm':
      switch (weatherDescription) {
        case 'light thunderstorm':
          weatherIcon = <WiDayThunderstorm size={size} color={color} />;
          break;

        default:
          weatherIcon = <WiThunderstorm size={size} color={color} />;
          break;
      }
      break;

    case 'Snow':
      switch (weatherDescription) {
        case 'Light shower sleet':
          weatherIcon = <WiDaySleet size={size} color={color} />;
          break;

        case 'Sleet':
          weatherIcon = <WiSleet size={size} color={color} />;
          break;

        case 'light snow':
          weatherIcon = <WiDaySnow size={size} color={color} />;
          break;

        default:
          weatherIcon = <WiSnow size={size} color={color} />;
          break;
      }
      break;

    case 'Mist':
      weatherIcon = <WiFog size={size} color={color} />;
      break;

    default:
      weatherIcon = <WiNA size={size} color={color} />;
      break;
  }
  return weatherIcon;
}
