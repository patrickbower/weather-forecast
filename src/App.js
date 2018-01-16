// react
import React, { Component } from 'react';

// utils
import * as request from './utils/request';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';

// styles
import './App.css';

// componants
import ForecastContainer from './containers/ForecastContainer';
import BackgroundContainer from './containers/BackgroundContainer';
import Spinner from './componants/Spinner';

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

        this.setState({ mounted: true });
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
            <div>
                <CSSTransitionGroup
                    transitionName="fadein"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}
                >
                    <BackgroundContainer data={this.state.data} key="1" />
                    <ForecastContainer data={this.state.data} key="2" />
                </CSSTransitionGroup>
            </div>
        ) : (
            <Spinner />
        );
    }
}

export default App;
