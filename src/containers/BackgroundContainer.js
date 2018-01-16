import React, { Component } from "react";

import Location from "../componants/Location";

// Logic to control page theme
class BackgroundContainer extends Component {
    constructor(props) {
        super(props);

        // Current weather icon
        const id = this.props.data.list[0].weather[0].id;
        this.state = { currentWeatherId: id };
    }

    // Find weather condition
    getWeatherType() {
        const currentWeatherId = this.state.currentWeatherId;
        this.setState({
            currentWeatherType: this.sortWeatherType(currentWeatherId)
        });
    }

    // Filter weather type by OWM condition id
    sortWeatherType(currentWeatherId) {
        switch (true) {
            case currentWeatherId < 232:
                return "thunderstorm";
            case currentWeatherId <= 321:
                return "drizzle";
            case currentWeatherId <= 532:
                return "rain";
            case currentWeatherId <= 622:
                return "snow";
            case currentWeatherId <= 781:
                return "atmosphere";
            case 800:
                return "clear";
            case currentWeatherId <= 804:
                return "clouds";
            case currentWeatherId <= 906:
                return "extreame";
            case currentWeatherId <= 962:
                return "additional";
            default:
                return "error";
        }
    }

    // Start when data availble.
    componentDidMount() {
        this.getWeatherType();
    }

    // Start with default background and add the
    // theme accorrding to current group.
    render() {
        if (this.state.currentWeatherType)
            document.body.classList.add(
                `theme--${this.state.currentWeatherType}`
            );
        return (
            <Location
                currentWeatherType={this.state.currentWeatherType}
                currentWeatherId={this.state.currentWeatherId}
                data={this.props.data}
            />
        );
    }
}

export default BackgroundContainer;
