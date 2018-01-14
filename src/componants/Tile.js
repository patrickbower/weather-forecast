import React, { Component } from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return <h1> Tile </h1>;
    }
}

export default Tile;
