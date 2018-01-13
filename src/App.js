// react
import React, { Component } from 'react';

// utils
import Config from './utils/config';
import * as Request from './utils/request';

// styles
import './App.css';

// componants

class App extends Component {

    constructor(props){
        super(props);

        // init fetch for cards
        Request.getWeather(this.getforcast.bind(this));
    }

    getforcast(data) {
        console.log(data);
    }

    render() {
        return (
            <div>
                Hello
            </div>
        );
    }
}

export default App;
