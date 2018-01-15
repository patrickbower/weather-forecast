import React, { Component } from 'react';

class Forecast extends Component {
    createBlocks() {
        return Object.keys(this.props.weather).map((day, index) => {
            return (
                <div key={index}>
                    <div className="block">
                        <div className="row">{this.createNameBlock(day)}</div>
                    </div>
                    <div className="block">
                        <div className="container">
                            <div className="row">
                                {this.createWeatherBlock(
                                    this.props.weather[day]
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    createNameBlock(day) {
        return <h2 className="block__title text-uppercase mb-0">{day}</h2>;
    }

    createWeatherBlock(weather) {
        return weather.map((item, index) => {
            return (
                <div key={index} className="col col-8 text-center weather-item">
                    <p className="weather-item__temp">{item.temp}ºc</p>
                    <i
                        className={`wi wi-owm-day-${item.code} weather-item__icon`}
                    />
                    <div className="weather-item__time text-lowercase">
                        {item.time}
                        <span>{item.meridiem}</span>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container forecast">
                <div>{this.createBlocks()}</div>
            </div>
        );
    }
}

export default Forecast;
