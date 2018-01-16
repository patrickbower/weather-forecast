import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div className="loading">
                <h5 className="loading__text mt-3 text-uppercase">
                    loading weather
                </h5>
                <div className="loading__spinner" />
            </div>
        );
    }
}

export default Spinner;
