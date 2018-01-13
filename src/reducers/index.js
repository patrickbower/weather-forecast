import counter from './counter';
import getFiveDayForcast from './getFiveDayForcast';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter, getFiveDayForcast
});

export default rootReducer;
