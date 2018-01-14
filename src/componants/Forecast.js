import React, { Component } from 'react';

import Tile from './Tile';

class Forecast extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    createBlocks() {
        return Object.keys(this.props.weather).map((day, index) => {
            return (
                <div key={index}>
                    <div>{this.createNameBlock(day)}</div>
                    <div>
                        {this.createWeatherBlock(this.props.weather[day])}
                    </div>
                </div>
            );
        });
    }

    createNameBlock(day) {
        return <h2>{day}</h2>;
    }

    createWeatherBlock(weather) {
        return weather.map((item, index) => {
            return (
                <div key={index}>
                    <p>{item.temp}</p>
                    <p>{item.code}</p>
                    <p>{item.time}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <div>{this.createBlocks()}</div>
            </div>
        );
    }
}

export default Forecast;
