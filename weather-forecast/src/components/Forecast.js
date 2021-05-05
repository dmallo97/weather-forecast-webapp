import React from 'react';
import styled from 'styled-components';

const Forecast = ({ city }) => {

    return(
        <ForecastContainer>
            <TemperatureChart />
            <FourDayForecast />
        </ForecastContainer>
    );
}

const ForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px; /* como se puede mejorar esto */
    height: 100%;
    background-color: orange;
`;

const TemperatureChart = styled.div`
    width: 100%; /* como se puede mejorar esto */
    height: 50%;
    background-color: yellow;
`;

const FourDayForecast = styled.div`
    width: 100%; /* como se puede mejorar esto */
    height: 50%;
    background-color: white;
`;

export default Forecast;

