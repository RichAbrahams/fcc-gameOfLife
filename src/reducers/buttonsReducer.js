import * as types from '../constants/actionTypes';

export default function updateCanvas(state = [], action) {
    switch (action.type) {
        case types.UPDATE_BUTTONS:
            return action.buttons;
        default:
            return state;
    }
}
