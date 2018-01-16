import React, { Component } from "react";
import moment from "moment";

import Forecast from "../componants/Forecast";

// Logic for forecast componant
class ForecastContainer extends Component {
    // Middleware function to build modal
    getWeatherByDay() {
        let daysObj = [];

        this.props.data.list.forEach((item, index) => {
            const day = moment(item.dt * 1000).format("dddd");
            const weather = {
                time: moment(item.dt * 1000).format("h"),
                meridiem: moment(item.dt * 1000).format("A"),
                temp: Math.round(item.main.temp),
                code: item.weather[0].id
            };

            const current = index === 0 ? true : false;
            if (current) weather.isCurrent = true;

            if (!daysObj[day]) daysObj[day] = [];
            daysObj[day].push(weather);
        });

        return daysObj;
    }

    // Call UI for forecast
    render() {
        return <Forecast weather={this.getWeatherByDay()} />;
    }
}

export default ForecastContainer;
