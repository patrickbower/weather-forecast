import config from './config';
import axios from 'axios';

function fetch(request, callback) {
    axios.get(request)
        .then(response => {
            callback(response.data);
        });
}

export function getWeather(callback) {
    const request = `${config.url}?lat=51.5074&lon=0.1278&APPID=${config.key}`;
    fetch(request, callback);
}
