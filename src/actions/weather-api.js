import * as types from './ActionTypes'

export function getFiveDayForcast(data){
  return {
    type: types.GET_FIVE_DAY_FORCAST,
    data
  }
}
