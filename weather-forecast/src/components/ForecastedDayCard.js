import React from 'react';

import moment from 'moment';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import renderWeatherIcon from '../utils/WeatherUtilities';

const ForecastedDayCard = ({
  date,
  humidity,
  weatherDescription,
  mainDescription,
  selected,
  index,
  setSelectedDay,
}) => {
  let formattedDate;
  if (date !== 'Today') {
    formattedDate = moment(date * 1000);
  }
  return (
    <Container active={selected} onClick={() => setSelectedDay(index)}>
      <strong>
        {date === 'Today'
          ? date
          : `${formattedDate.format('ddd')} ${formattedDate
              .toDate()
              .getDate()}`}
      </strong>
      {selected
        ? renderWeatherIcon(mainDescription, weatherDescription, 50, '#fff')
        : renderWeatherIcon(mainDescription, weatherDescription, 50, '#666666')}
      <div>Humidity</div>
      <div>
        {humidity}
        <span>%</span>
      </div>
    </Container>
  );
};

ForecastedDayCard.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
  mainDescription: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

const Container = styled.div`
  ${(props) =>
    props.active &&
    css`
      background-color: #5596f6;
      color: white;
    `}
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 20px;
  width: 70px;
`;

export default ForecastedDayCard;
