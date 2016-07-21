import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {newGrid, nextGrid, blankGrid} from '../logic/gridFunctions';
import GridCanvas from './GridCanvas';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.increaseSquareSize = this.increaseSquareSize.bind(this);
            this.decreaseSquareSize = this.decreaseSquareSize.bind(this);
            this.startTimer = this.startTimer.bind(this);
            this.newRandomGrid = this.newRandomGrid.bind(this);
            this.increaseSpeed = this.increaseSpeed.bind(this);
            this.decreaseSpeed = this.decreaseSpeed.bind(this);
            this.setTimer = this.setTimer.bind(this);
            this.clearGrid = this.clearGrid.bind(this);

        }


        componentDidMount() {
          this.setTimer();
        }

        calcGrid(size) {
            let rows = Math.floor(500 / size);
            let columns = Math.floor(750 / size);
            let output = [rows, columns];
            return output;
        }

        increaseSquareSize() {
            if (this.props.squareSize < 50) {
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

        decreaseSpeed(){

          switch (this.props.speed){
            case 50:
              this.props.actions.updateSpeed(100);
              break;
            case 100:
              this.props.actions.updateSpeed(250);
              break;
            case 250:
              this.props.actions.updateSpeed(500);
              break;
            case 500:
              this.props.actions.updateSpeed(1000);
              break;
            default:
              break;
          }
        }

        increaseSpeed(){
          switch (this.props.speed){
            case 1000:
              this.props.actions.updateSpeed(500);
              break;
            case 500:
              this.props.actions.updateSpeed(250);
              break;
            case 250:
              this.props.actions.updateSpeed(100);
              break;
            case 100:
              this.props.actions.updateSpeed(50);
              break;
            default:
              break;
          }
        }

        startTimer() {
            let newRun = !this.props.run;
            this.props.actions.updateRun(newRun);
        }

        setTimer() {
          const timer = setTimeout(() => {
              if (this.props.run) {
                  let grid = nextGrid(this.props.grid);
                  this.props.actions.updateGrid(grid);
                  this.props.actions.updateGenerations(this.props.generations + 1);

              }
              this.setTimer();
          }, this.props.speed);
        }

        newRandomGrid(){
          let size = this.calcGrid(this.props.squareSize);
          let gridTemplate = newGrid(size[0], size[1]);
          this.props.actions.updateGenerations(0);
          this.props.actions.updateGrid(gridTemplate);
          if (this.props.run) {this.startTimer();}
        }

        clearGrid(){
          let size = this.calcGrid(this.props.squareSize);
          let gridTemplate = blankGrid(size[0], size[1]);
          this.props.actions.updateGenerations(0);
          this.props.actions.updateGrid(gridTemplate);
          if (this.props.run) {this.startTimer();}
        }

        render(){
          const timerLabel = this.props.run ? 'Stop' : 'Start';
          return (
            <div>
              <GridCanvas />
              <button onClick={this.increaseSquareSize}>Squares +</button>
              <button onClick={this.decreaseSquareSize}>Squares -</button>
              <button onClick={this.increaseSpeed}>Speed + </button>
              <button onClick={this.decreaseSpeed}>Speed - </button>
              <p>{this.props.speed}</p>
              <button onClick={this.startTimer}>{timerLabel}</button>
              <button onClick={this.newRandomGrid}>New Grid</button>
              <button onClick={this.clearGrid}>Clear Grid</button>
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
