import * as types from '../constants/actionTypes';

export default function gridReducer(state = [], action) {
    switch (action.type) {
        case types.UPDATE_GRID:
            state = action.grid;
            return state;
        default:
            return state;
    }
}
