import * as types from '../constants/actionTypes';

export default function updateCanvas(state = [], action) {
    switch (action.type) {
        case types.UPDATE_CANVAS:
            return action.size;
        case types.INCREASE_SQUARE_SIZE:
            return action.size[3];
        case types.DECREASE_SQUARE_SIZE:
            return action.size[3];
        default:
            return state;
    }
}