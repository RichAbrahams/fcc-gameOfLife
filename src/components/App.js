import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {newGrid, nextGrid, blankGrid} from '../logic/gridFunctions';
import GridCanvas from './GridCanvas';

class App extends React.Component {
        constructor(props) {
            super(props);
            this.startTimer = this.startTimer.bind(this);
            this.newRandomGrid = this.newRandomGrid.bind(this);
            this.setTimer = this.setTimer.bind(this);
            this.clearGrid = this.clearGrid.bind(this);
            this.speedRange = this.speedRange.bind(this);
            this.zoomRange = this.zoomRange.bind(this);
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

        speedRange(){
          let value = ReactDOM.findDOMNode(this.refs.speedSlider).value;
          let speed = 1050 - value;
          this.props.actions.updateSpeed(speed);
        }

        zoomRange(){
          let value = ReactDOM.findDOMNode(this.refs.zoomSlider).value;
          let gridDimensions = this.calcGrid(value);
          let canvHeight = gridDimensions[0] * (value);
          let canvWidth = gridDimensions[1] * (value);
          this.props.actions.updateSquareSize([value, gridDimensions[0], gridDimensions[1],[canvWidth, canvHeight]]);
          this.props.actions.updateGenerations(0);
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
              <div className="buttonContainer">
              <input ref="speedSlider" type="range" min="550" max="1020" onChange={this.speedRange}/>
              <input ref="zoomSlider" type="range" min="10" max="50" onChange={this.zoomRange}/>
              <p>{this.props.speed}</p>
              <button onClick={this.startTimer}>{timerLabel}</button>
              <button onClick={this.newRandomGrid}>New Grid</button>
              <button onClick={this.clearGrid}>Clear Grid</button>
              <p>{this.props.generations}</p>
              </div>
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
