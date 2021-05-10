import React from 'react';
import ForecastedDayCard from './ForecastedDayCard';
import styled from 'styled-components';

const FourDayForecast = ({ forecast, setSelectedDay, selectedDay}) => {
    const days = new Array(4).fill(false);
    days[selectedDay] = true;

    return(
        <Container>
            {forecast.map((forecastedDay, i) => (
                <ForecastedDayCard date={forecastedDay.date} weatherDescription={forecastedDay.description} humidity={forecastedDay.humidity} 
                    selected={days[i]} index={i} setSelectedDay={setSelectedDay} />
            ))}
        </Container>
    );
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