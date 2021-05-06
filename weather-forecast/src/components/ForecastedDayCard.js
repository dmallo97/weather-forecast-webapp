import React from 'react';
import styled from 'styled-components';
import { WiCloudy } from 'weather-icons-react';

const ForecastedDayCard = ({ date, weatherDescription, humidity}) => (
    <Container>
        <strong>Today</strong>
        <WiCloudy size={50} color={'#fff'} />
        <label>Humidity</label>
        <label>30%</label>
    </Container>
);

const Container = styled.div`
    background-color: red;
    color: white;
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