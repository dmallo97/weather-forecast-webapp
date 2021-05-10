import React from 'react';
import styled, { css } from 'styled-components';
import { WiCloudy } from 'weather-icons-react';

const ForecastedDayCard = ({ date, weatherDescription, humidity, selected, index, setSelectedDay}) => (
    <Container active={selected} onClick={() => setSelectedDay(index)}>
        <strong>{date}</strong>
        <WiCloudy size={50} color={'#fff'} />
        <label>Humidity</label>
        <label>{humidity}%</label>
    </Container>
);

const Container = styled.div`
    ${props => props.active && css`
        background-color: #5596F6;
        color: white;`
    }
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