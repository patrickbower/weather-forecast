import React, { Component } from 'react';

// import Forecast from '../componants/Location';

class LocationContainer extends Component {
    render() {
        return (
            <div className="container-fluid location">
                <h1 className="h5 text-white text-uppercase location__heading">
                    {`${this.props.data.city.name},
                        ${this.props.data.city.country}`}
                </h1>
            </div>
        );
    }
}

export default LocationContainer;
