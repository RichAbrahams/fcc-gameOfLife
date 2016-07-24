import * as types from '../constants/actionTypes';

export default function updateCanvas(state = [], action) {
    switch (action.type) {
        case types.UPDATE_CANVAS:
            return action.size;
        default:
            return state;
    }
}
