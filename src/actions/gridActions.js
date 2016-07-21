import * as types from '../constants/actionTypes';


export function updateGrid(grid) {
  return {type: types.UPDATE_GRID, grid};
}

export function increaseSquareSize(size) {
  return {type: types.INCREASE_SQUARE_SIZE, size};
}

export function decreaseSquareSize(size) {
  return {type: types.DECREASE_SQUARE_SIZE, size};
}

export function updateRun(run) {
  return {type: types.UPDATE_RUN, run};
}

export function updateGenerations(generations) {
  return {type: types.UPDATE_GENERATIONS, generations};
}
