import * as types from '../constants/actionTypes';

export function updateGrid(grid) {
  return {type: types.UPDATE_GRID, grid};
}

export function increaseDensity(density) {
  return {type: types.INCREASE_DENSITY, density};
}

export function decreaseDensity(density) {
  return {type: types.DECREASE_DENSITY, density};
}

export function updateRun(run) {
  return {type: types.UPDATE_RUN, run};
}

export function updateGenerations(generations) {
  return {type: types.UPDATE_GENERATIONS, generations};
}

export function updateSquareSize(size) {
  return {type: types.UPDATE_SQUARE_SIZE, size};
}
