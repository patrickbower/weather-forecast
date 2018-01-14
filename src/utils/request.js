import config from './config';

export const fiveDayForcast = (latitude, longitude) =>
    `${config.url}?lat=${latitude}&lon=${longitude}&units=metric&APPID=${config.key}`;
