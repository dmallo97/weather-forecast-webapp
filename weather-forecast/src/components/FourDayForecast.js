import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import ForecastedDayCard from './ForecastedDayCard';

const FourDayForecast = ({ forecast, setSelectedDay, selectedDay }) => {
  const days = new Array(4).fill(false);
  days[selectedDay] = true;

  return (
    <Container>
      {forecast.map((forecastedDay, i) => (
        <ForecastedDayCard
          date={forecastedDay.date}
          weatherDescription={forecastedDay.description}
          mainDescription={forecastedDay.mainDescription}
          humidity={forecastedDay.humidity}
          selected={days[i]}
          index={i}
          setSelectedDay={setSelectedDay}
        />
      ))}
    </Container>
  );
};

FourDayForecast.propTypes = {
  forecast: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      mainDescription: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedDay: PropTypes.number.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 15px;
`;

export default FourDayForecast;
