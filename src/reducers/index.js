// Set up your root reducer here...
import {
    combineReducers
} from 'redux';
import columnsReducer from './columnsReducer';
import generationsReducer from './generationsReducer';
import gridReducer from './gridReducer';
import rowsReducer from './rowsReducer';
import runReducer from './runReducer';

const rootReducer = combineReducers({
    columns: columnsReducer,
    generations: generationsReducer,
    grid: gridReducer,
    rows: rowsReducer,
    run: runReducer,
});

export default rootReducer;
