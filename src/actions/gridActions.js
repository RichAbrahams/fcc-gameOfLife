import * as types from '../constants/actionTypes';

export function updateGrid(grid) {
  return {type: types.UPDATE_GRID, grid};
}

export function updateRows(rows) {
  return {type: types.UPDATE_ROWS, rows};
}

export function updateColumns(columns) {
  return {type: types.UPDATE_COLUMNS, columns};
}

export function updateRun(run) {
  return {type: types.UPDATE_RUN, run};
}

export function updateGenerations(generations) {
  return {type: types.UPDATE_GENERATIONS, generations};
}
