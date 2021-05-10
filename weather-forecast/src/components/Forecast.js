import React, {useState} from 'react';
import styled from 'styled-components';
import TemperatureChart from './TemperatureChart';
import FourDayForecast from './FourDayForecast';

const Forecast = ({ forecastedDays, forecastedTemperatures }) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    return(
        <ForecastContainer>
            <TemperatureChartContainer>
                <TemperatureChart forecast={forecastedTemperatures} selectedDayIndex={selectedDayIndex} />
            </TemperatureChartContainer>
            <FourDayForecastContainer>
                <FourDayForecast forecast={forecastedDays} setSelectedDay={setSelectedDayIndex} selectedDay={selectedDayIndex} />
            </FourDayForecastContainer>
        </ForecastContainer>
    );
}

const ForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px; /* como se puede mejorar esto */
    /*background-color: orange;*/
`;

const TemperatureChartContainer = styled.div`
    width: 100%; /* como se puede mejorar esto */
    /*background-color: yellow;*/
`;

const FourDayForecastContainer = styled.div`
    width: 100%; /* como se puede mejorar esto */
    /*background-color: white;*/
    padding: 0px;
`;

export default Forecast;

