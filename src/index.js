import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.styl';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {newGrid} from './logic/gridFunctions';

const initialGrid = newGrid(10,10);
const initialState = {
  grid: initialGrid,
  rows: 10,
  columns: 10,
  run: true,
  generations: 0
};
const store = configureStore(initialState);

render (
  <Provider store={store}>
  <Router history={browserHistory} routes={routes} />
  </Provider>
  ,  document.getElementById('app')
);
