import * as types from '../constants/actionTypes';

export default function squareSizeReducer(state = 5, action) {
    switch (action.type) {
        case types.INCREASE_SQUARE_SIZE:{
            return state = state + action.size[0];
          }
        case types.DECREASE_SQUARE_SIZE:{
            return state = state - action.size[0];
          }
        default:
            return state;
    }
}
