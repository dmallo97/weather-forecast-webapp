import React from 'react';
import styled from 'styled-components';
import TemperatureChart from './TemperatureChart';
import FourDayForecast from './FourDayForecast';

const Forecast = ({ city }) => {

    return(
        <ForecastContainer>
            <TemperatureChartContainer>
            </TemperatureChartContainer>
            <FourDayForecastContainer>
                <FourDayForecast />
            </FourDayForecastContainer>
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

const TemperatureChartContainer = styled.div`
    width: 100%; /* como se puede mejorar esto */
    height: 50%;
    background-color: yellow;
`;

const FourDayForecastContainer = styled.div`
    width: 100%; /* como se puede mejorar esto */
    height: 50%;
    background-color: white;
    padding: 0px;
`;

export default Forecast;

