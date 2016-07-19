import * as types from '../constants/actionTypes';

export default function columnsReducer(state = 0, action) {
    switch (action.type) {
        case types.INCREASE_COLUMNS:
            return state + action.columns;
        case types.DECREASE_COLUMNS:
            return state - action.columns;
        default:
            return state;
    }
}
