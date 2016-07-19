import * as types from '../constants/actionTypes';

export default function gridReducer(state = {}, action) {
  switch (action.type){
    case types.UPDATE_GRID:
      return Object.assign({},state,{grid:action.grid});
    case types.UPDATE_ROWS:
      return Object.assign({},state,{rows:action.rows});
    case types.UPDATE_COLUMNS:
      return Object.assign({},state,{columns:action.columns});
    case types.UPDATE_RUN:
      return Object.assign({},state,{run:action.run});
    case types.UPDATE_GENERATIONS:
      return Object.assign({},state,{run:action.generations});
    default:
      return state;
  }
}
