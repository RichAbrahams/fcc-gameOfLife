import React from 'react';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {connect} from 'react-redux';
import {newGrid, nextGrid, blankGrid} from '../logic/gridFunctions';

class ButtonControls extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.newRandomGrid = this.newRandomGrid.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
    this.setTimer = this.setTimer.bind(this);
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
    <div className="buttonsContainer">
      <div className="startContainer">
        <button onClick={this.startTimer}>{timerLabel}</button>
      </div>
      <div className="newContainer">
        <button onClick={this.newRandomGrid}>New Grid</button>
      </div>
      <div className="clearContainer">
        <button onClick={this.clearGrid}>Clear Grid</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonControls);
