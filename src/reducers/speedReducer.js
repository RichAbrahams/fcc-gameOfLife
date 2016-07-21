import * as types from '../constants/actionTypes';

export default function speedReducer(state = 300, action) {
    switch (action.type) {
        case types.UPDATE_SPEED:
            return action.speed;
        default:
            return state;
    }
}
