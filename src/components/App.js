import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {newGrid, nextGrid} from '../logic/gridFunctions';
import GridCanvas from './GridCanvas';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.increaseSquareSize = this.increaseSquareSize.bind(this);
            this.decreaseSquareSize = this.decreaseSquareSize.bind(this);
            this.startTimer = this.startTimer.bind(this);
        }

        calcGrid(size) {
            let rows = Math.floor(500 / size);
            let columns = Math.floor(750 / size);
            let output = [rows, columns];
            return output;
        }

        increaseSquareSize() {
            if (this.props.squareSize < 200) {
                let gridCalc = this.calcGrid(this.props.squareSize + 5);
                let canvHeight = gridCalc[0] * (this.props.squareSize + 5);
                let canvWidth = gridCalc[1] * (this.props.squareSize + 5);
                this.props.actions.increaseSquareSize([5, gridCalc[0], gridCalc[1],
                    [canvWidth, canvHeight]
                ]);
                this.props.actions.updateGenerations(0);
            }
        }

        decreaseSquareSize() {
            if (this.props.squareSize > 10) {
                let gridCalc = this.calcGrid(this.props.squareSize - 5);
                let canvHeight = gridCalc[0] * (this.props.squareSize - 5);
                let canvWidth = gridCalc[1] * (this.props.squareSize - 5);
                this.props.actions.decreaseSquareSize([5, gridCalc[0], gridCalc[1],
                    [canvWidth, canvHeight]
                ]);
                this.props.actions.updateGenerations(0);
            }
        }

        startTimer() {
            let newRun = !this.props.run;
            this.props.actions.updateRun(newRun);
        }

        componentDidMount() {
            const timer = setInterval(() => {
                if (this.props.run) {
                    let grid = nextGrid(this.props.grid);
                    this.props.actions.updateGrid(grid);
                    this.props.actions.updateGenerations(this.props.generations + 1);
                }
            }, 100);
        }

        render(){
          const timerLabel = this.props.run ? 'Stop' : 'Start';
          return (
            <div>
              <GridCanvas />
              <button onClick={this.increaseSquareSize}>Squares +</button>
              <button onClick={this.decreaseSquareSize}>Squares -</button>
              <button onClick={this.startTimer}>{timerLabel}</button>
              <p>{this.props.generations}</p>
            </div>
          );
        }
        }

function mapStateToProps(state) {
    return {
        grid: state.grid,
        squareSize: state.squareSize,
        run: state.run,
        generations: state.generations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gridActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
