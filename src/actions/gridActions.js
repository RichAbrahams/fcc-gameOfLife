import * as types from '../constants/actionTypes';

export function updateGrid(grid) {
  return {type: types.UPDATE_GRID, grid};
}

export function increaseRows(rows) {
  return {type: types.INCREASE_ROWS, rows};
}

export function decreaseRows(rows) {
  return {type: types.DECREASE_ROWS, rows};
}

export function increaseColumns(columns) {
  return {type: types.INCREASE_COLUMNS, columns};
}

export function decreaseColumns(columns) {
  return {type: types.DECREASE_COLUMNS, columns};
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
