import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {newGrid, nextGrid, blankGrid} from '../logic/gridFunctions';
import GridCanvas from './GridCanvas';
import Controls from './Controls'

class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render(){
          return (
            <div>
              <GridCanvas />
              <Controls />
            </div>
          );
        }
        }

function mapStateToProps(state) {
    return {
        grid: state.grid,
        squareSize: state.squareSize,
        run: state.run,
        generations: state.generations,
        speed: state.speed
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gridActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
