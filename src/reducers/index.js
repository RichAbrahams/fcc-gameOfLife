// Set up your root reducer here...
import {
    combineReducers
} from 'redux';
import generationsReducer from './generationsReducer';
import gridReducer from './gridReducer';
import runReducer from './runReducer';
import squareSizeReducer from './squareSizeReducer';
import canvasReducer from './canvasReducer';
import speedReducer from './speedReducer';
import buttonReducer from './buttonsReducer';

const rootReducer = combineReducers({
    generations: generationsReducer,
    grid: gridReducer,
    run: runReducer,
    squareSize: squareSizeReducer,
    canvas: canvasReducer,
    speed: speedReducer,
    buttons: buttonReducer
});

export default rootReducer;
