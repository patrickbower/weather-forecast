import {
  GET_FIVE_DAY_FORCAST
} from '../actions/ActionTypes'

function getFiveDayForcast(state = {}, action) {
    switch(action.type) {
          case 'GET_FIVE_DAY_FORCAST':
              // return { ...state, [action.data.id] : action.data }
              console.log('hellloooo GET_FIVE_DAY_FORCAST');
              return state;
    default:
      return state
  }
}

export default getFiveDayForcast
