import React, { Component } from "react";

// Header displaying current location and current weather icon UI.
class Location extends Component {
    render() {
        return (
            <div className="container-fluid location">
                <h1 className="h5 text-white text-uppercase location__heading">
                    {`${this.props.data.city.name}`}
                </h1>
                <i
                    className={`wi wi-owm-day-${this.props
                        .currentWeatherId} location__icon`}
                />
            </div>
        );
    }
}

export default Location;
