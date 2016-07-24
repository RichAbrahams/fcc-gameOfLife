import * as types from '../constants/actionTypes';


export function updateGrid(grid) {
  return {type: types.UPDATE_GRID, grid};
}

export function updateCanvas(size) {
  return {type: types.UPDATE_CANVAS, size};
}

export function updateSquareSize(size) {
  return {type: types.UPDATE_SQUARE_SIZE, size};
}

export function updateRun(run) {
  return {type: types.UPDATE_RUN, run};
}

export function updateGenerations(generations) {
  return {type: types.UPDATE_GENERATIONS, generations};
}

export function updateSpeed(speed) {
  return {type: types.UPDATE_SPEED, speed};
}

export function updateControlButtons(buttons){
  return {type: types.UPDATE_BUTTONS, buttons};
}
