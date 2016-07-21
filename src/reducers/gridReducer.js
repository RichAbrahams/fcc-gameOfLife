import * as types from '../constants/actionTypes';
import {newGrid, nextGrid} from '../logic/gridFunctions';

export default function gridReducer(state = [], action) {
    switch (action.type) {
        case types.UPDATE_GRID:
            state = action.grid;
            return state;
        case types.INCREASE_SQUARE_SIZE:
            return newGrid(action.size[1],action.size[2]);
        case types.DECREASE_SQUARE_SIZE:
            return newGrid(action.size[1],action.size[2]);
        default:
            return state;
    }
}
