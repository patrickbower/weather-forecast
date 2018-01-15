import React, { Component } from 'react';

class BackgroundContainer extends Component {
    constructor(props) {
        super(props);

        const id = this.props.data.list[0].weather[0].id;
        this.state = { currentWeatherId: id };
    }

    getWeatherType() {
        const currentWeatherId = this.state.currentWeatherId;
        this.setState({
            currentWeatherType: this.sortWeatherType(currentWeatherId)
        });
    }

    sortWeatherType(currentWeatherId) {
        switch (true) {
            case currentWeatherId < 232:
                return 'thunderstorm';
            case currentWeatherId <= 321:
                return 'drizzle';
            case currentWeatherId <= 532:
                return 'rain';
            case currentWeatherId <= 622:
                return 'snow';
            case currentWeatherId <= 781:
                return 'atmosphere';
            case 800:
                return 'clear';
            case currentWeatherId <= 804:
                return 'clouds';
            case currentWeatherId <= 906:
                return 'extreame';
            case currentWeatherId <= 962:
                return 'additional';
            default:
                return 'error';
        }
    }

    componentDidMount() {
        this.getWeatherType();
    }

    render() {
        if (this.state.currentWeatherType)
            document.body.classList.add(
                `theme--${this.state.currentWeatherType}`
            );
        return false;
    }
}

export default BackgroundContainer;
