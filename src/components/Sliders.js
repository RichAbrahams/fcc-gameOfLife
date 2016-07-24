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

// factors [6,12,20,30,60]

        calcGrid(value) {
            const sizes = [6,12,20,30,60]
            let size;
            if (value > 80) {
              size = 60;
            } else if (value > 60) {
              size = 30;
            } else if (value > 40) {
              size = 20;
            } else if (value > 20) {
              size = 12;
            } else {
              size = 6;
            }
            let rows = Math.floor(420 / size);
            let columns = Math.floor(720 / size);
            let output = [size, rows, columns];
            return output;
        }

        speedRange(){
          let value = ReactDOM.findDOMNode(this.refs.speedSlider).value;
          let speed = 1050 - value;
          this.props.actions.updateSpeed(speed);
        }

        zoomRange(){
          let value = ReactDOM.findDOMNode(this.refs.zoomSlider).value;
          let rangeResult = this.calcGrid(value);
          if (this.props.squareSize != rangeResult[0]){
          this.props.actions.updateSquareSize(rangeResult);
          this.props.actions.updateGenerations(0);
        }
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
          min="0"
          max="100"
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
