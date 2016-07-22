import * as types from '../constants/actionTypes';

export default function squareSizeReducer(state = 5, action) {
    switch (action.type) {
        case types.UPDATE_SQUARE_SIZE:{
            return action.size[0];
          }
        default:
            return state;
    }
}
