import * as types from '../constants/actionTypes';

export default function generationsdReducer(state = 0, action) {
    switch (action.type) {
        case types.UPDATE_GENERATIONS:
            return action.generations;
        default:
            return state;
    }
}
