import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.styl';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {newGrid} from './logic/gridFunctions';

const initialGrid = newGrid(50,50);
const initialState = {
  grid: initialGrid,
  density: 50,
  run: true,
  generations: 0,
  squareSize: 10
};
const store = configureStore(initialState);

render (
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
