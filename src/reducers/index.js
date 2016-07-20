// Set up your root reducer here...
import {
    combineReducers
} from 'redux';
import generationsReducer from './generationsReducer';
import gridReducer from './gridReducer';
import densityReducer from './densityReducer';
import runReducer from './runReducer';
import squareSizeReducer from './squareSizeReducer';

const rootReducer = combineReducers({
    density: densityReducer,
    generations: generationsReducer,
    grid: gridReducer,
    run: runReducer,
    squareSize: squareSizeReducer
});

export default rootReducer;
