import * as types from '../constants/actionTypes';

export default function squareSizeReducer(state = 10, action) {
    switch (action.type) {
        case types.UPDATE_SQUARE_SIZE:
            return action.size;
        default:
            return state;
    }
}
