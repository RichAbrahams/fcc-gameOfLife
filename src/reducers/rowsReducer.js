import * as types from '../constants/actionTypes';

export default function rowsReducer(state = 0, action) {
    switch (action.type) {
        case types.INCREASE_ROWS:
            console.log('state', state);
            console.log('state sum ', state + action.rows);
            return state + action.rows;
        case types.DECREASE_ROWS:
            return state - action.rows;
        default:
            return state;
    }
}
