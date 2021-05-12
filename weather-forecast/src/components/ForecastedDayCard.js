import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { WiCloudy } from 'weather-icons-react';
import moment from 'moment';

const ForecastedDayCard = ({
  date,
  humidity,
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
      <strong>{date === 'Today' ? date : `${formattedDate.format('ddd')} ${formattedDate.toDate().getDate()}`}</strong>
      <WiCloudy size={50} color="#fff" />
      Humidity
      {humidity}
      %
    </Container>
  );
};

ForecastedDayCard.propTypes = {
  date: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

const Container = styled.div`
  ${(props) => props.active
    && css`
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
