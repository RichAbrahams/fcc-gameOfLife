import * as types from '../constants/actionTypes';

export default function densityReducer(state = 0, action) {
    switch (action.type) {
        case types.INCREASE_DENSITY:
            return state + action.density;
        case types.DECREASE_DENSITY:
            return state - action.density;
        default:
            return state;
    }
}
