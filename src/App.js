// react
import React, { Component } from 'react';

// utils
import * as request from './utils/request';
import axios from 'axios';

// styles
import './App.css';

// componants
import ForecastContainer from './containers/ForecastContainer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        };
    }

    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
        const getPosition = options => {
            return new Promise(function(resolve, reject) {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    options
                );
            });
        };

        getPosition(options)
            .then(position => {
                this.getData(position);
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    getData(position) {
        axios
            .get(
                request.fiveDayForcast(
                    position.coords.latitude,
                    position.coords.longitude
                )
            )
            .then(
                response => {
                    this.setState({
                        isLoaded: true,
                        data: response.data
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        return this.state.isLoaded ? (
            <ForecastContainer data={this.state.data} />
        ) : (
            <div> NOT Ready </div>
        );
    }
}

export default App;
