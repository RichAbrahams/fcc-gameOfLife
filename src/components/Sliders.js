import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {connect} from 'react-redux';

class Sliders extends React.Component {
  constructor(props) {
    super(props);
    this.speedRange = this.speedRange.bind(this);
    this.zoomRange = this.zoomRange.bind(this);
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


render(){
  return (
      <div className ="sliderContainer">
        <input className="speedSlider"
          ref="speedSlider"
          type="range"
          min="550"
          max="1020"
          onChange={this.speedRange}/>
        <input className="zoomSlider"
          ref="zoomSlider"
          type="range"
          min="10"
          max="50"
          onChange={this.zoomRange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
