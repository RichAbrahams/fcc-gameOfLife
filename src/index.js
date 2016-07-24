import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.styl';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {newGrid} from './logic/gridFunctions';
require('../node_modules/font-awesome/css/font-awesome.css');

const initialGrid = newGrid(50,75);
const initialState = {
  grid: initialGrid,
  run: false,
  generations: 0,
  squareSize: 30,
  canvas: [750,500],
  speed: 235,
  buttons: [false,false,false]
};
const store = configureStore(initialState);

render (
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
