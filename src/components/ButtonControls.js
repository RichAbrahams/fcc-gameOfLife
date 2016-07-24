import React from 'react';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {connect} from 'react-redux';
import {newGrid, nextGrid, blankGrid} from '../logic/gridFunctions';
import deepcopy from 'deepcopy';

class ButtonControls extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.newRandomGrid = this.newRandomGrid.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.buttonTransition = this.buttonTransition.bind(this);
    this.endButtonTransition = this.endButtonTransition.bind(this);
  }

        componentDidMount() {
            this.setTimer();
        }

        calcGrid(size) {
            let rows = Math.floor(420 / size);
            let columns = Math.floor(720 / size);
            let output = [rows, columns];
            return output;
        }

        startTimer() {
            let newRun = !this.props.run;
            this.props.actions.updateRun(newRun);
            this.buttonTransition(0);
        }

        newRandomGrid(){
            let size = this.calcGrid(this.props.squareSize);
            let gridTemplate = newGrid(size[0], size[1]);
            this.props.actions.updateGenerations(0);
            this.props.actions.updateGrid(gridTemplate);
            if (this.props.run) {this.startTimer();}
            this.buttonTransition(1);
        }

        clearGrid(){
            let size = this.calcGrid(this.props.squareSize);
            let gridTemplate = blankGrid(size[0], size[1]);
            this.props.actions.updateGenerations(0);
            this.props.actions.updateGrid(gridTemplate);
            if (this.props.run) {this.startTimer();}
            this.buttonTransition(2);
        }

        buttonTransition(e){
          let oldButtons = deepcopy(this.props.buttons);
          oldButtons[e] = true;
          this.props.actions.updateControlButtons(oldButtons);
          let element;
          switch (e){
            case 0:
              element = document.querySelector('.startButton');
              break;
            case 1:
              element = document.querySelector('.newButton');
              break;
            case 2:
              element = document.querySelector('.clearButton');
              break;
          }
          element.addEventListener("transitionend", this.endButtonTransition, false);
        }

        endButtonTransition(e){
          let oldButtons = deepcopy(this.props.buttons);
          switch (e.target.className){
            case "startButton buttonTrans":
              oldButtons[0] = false;
              break;
            case "newButton buttonTrans":
              oldButtons[1] = false;
              break;
            case "clearButton buttonTrans":
              oldButtons[2] = false;
              break;
          }
          this.props.actions.updateControlButtons(oldButtons);
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

render(){

  const startLabel = this.props.run ? 'fa fa-pause fa-3x' : 'fa fa-play fa-3x';
  const startClass = this.props.buttons[0] ? 'startButton buttonTrans' : 'startButton';
  const newClass = this.props.buttons[1] ? 'newButton buttonTrans' : 'newButton';
  const clearClass = this.props.buttons[2] ? 'clearButton buttonTrans' : 'clearButton';

  return (
    <div className="buttonsContainer">
      <div className="startContainer">
        <button className={startClass} ref="startButton" onClick={this.startTimer}><i className={startLabel} aria-hidden="true"></i></button>
      </div>
      <div className="newContainer">
        <button className={newClass} onClick={this.newRandomGrid}><i className="fa fa-refresh fa-3x" aria-hidden="true"></i></button>
      </div>
      <div className="clearContainer">
        <button className={clearClass} onClick={this.clearGrid}><i className="fa fa-eraser fa-3x" aria-hidden="true"></i></button>
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
        speed: state.speed,
        buttons: state.buttons
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gridActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonControls);
