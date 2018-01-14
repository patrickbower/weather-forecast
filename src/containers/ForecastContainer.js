import React, { Component } from 'react';
import moment from 'moment';

import Forecast from '../componants/Forecast';

class ForecastContainer extends Component {
    getWeatherByDay() {
        let daysObj = [];

        this.props.data.list.forEach(item => {
            const day = moment(item.dt * 1000).format('dddd');
            const weather = {
                time: moment(item.dt * 1000).format('hA'),
                temp: Math.round(item.main.temp),
                code: item.weather[0].id
            };

            if (!daysObj[day]) daysObj[day] = [];
            daysObj[day].push(weather);
        });

        return daysObj;
    }

    getLocation() {
        return {
            location: this.props.data.city.name,
            country: this.props.data.city.country
        };
    }

    render() {
        return (
            <Forecast
                weather={this.getWeatherByDay()}
                location={this.getLocation()}
            />
        );
    }
}

export default ForecastContainer;
