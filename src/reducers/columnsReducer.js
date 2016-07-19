import * as types from '../constants/actionTypes';

export default function columnsReducer(state = 0, action) {
    switch (action.type) {
        case types.UPDATE_COLUMNS:
            return action.columns;
        default:
            return state;
    }
}
