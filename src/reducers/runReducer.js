import * as types from '../constants/actionTypes';

export default function runReducer(state = true, action) {
  switch (action.type){
    case types.UPDATE_RUN:
      return action.run;
    default:
      return state;
  }
}
