// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import gridReducer from './gridReducer';

 const rootReducer = combineReducers({
   grid: gridReducer,
   rows: gridReducer,
   columns: gridReducer,
   run: gridReducer,
   generations: gridReducer
 });

 export default rootReducer;
