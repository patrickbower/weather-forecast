// React
import React, { Component } from "react";

// Utils
import * as request from "./utils/request";
import axios from "axios";
import { CSSTransitionGroup } from "react-transition-group";

// Styles
import "./App.css";

// Componants
import ForecastContainer from "./containers/ForecastContainer";
import BackgroundContainer from "./containers/BackgroundContainer";
import Spinner from "./componants/Spinner";

class App extends Component {
    constructor(props) {
        super(props);

        // Defualt state.
        this.state = {
            error: null,
            isLoaded: false,
            data: {}
        };
    }

    // Get loctaion, then get correlating data from API.
    componentDidMount() {
        // Fetch AJAX options.
        const options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
        // Call back functions as there resolved.
        const getPosition = options => {
            return new Promise(function(resolve, reject) {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    options
                );
            });
        };
        // Find location.
        getPosition(options)
            .then(position => {
                // Get correlating data.
                this.getData(position);
            })
            .catch(error => {
                this.setState({
                    error
                });
            });
    }
    // Get correlating data.
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
    // Render loading screen untill location and data resolved
    // animate contents in.
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
