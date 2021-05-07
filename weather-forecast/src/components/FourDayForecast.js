import React from 'react';
import ForecastedDayCard from './ForecastedDayCard';
import styled from 'styled-components';

const FourDayForecast = () => (
    <Container>
        <ForecastedDayCard />
        <ForecastedDayCard />
        <ForecastedDayCard />
        <ForecastedDayCard />
    </Container>
);

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 15px;
`;

export default FourDayForecast;