import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';

class GridCanvas extends React.Component {
  constructor(props) {
    super(props);
  }

shouldComponentUpdate(){
  this.drawCanvas();
  return false;
}

  drawCanvas(){
     let myCanvas = ReactDOM.findDOMNode(this.refs.myCanvas);
     const ctx = this.refs.myCanvas.getContext('2d');
     ctx.lineWidth = 1;
     for (let row = 0; row < this.props.grid.length; row++){
       for (let column = 0; column < this.props.grid[0].length; column++){
        ctx.fillStyle = this.props.grid[row][column] == 1 ? '#ff4000' : '#bfff00';
        ctx.strokeStyle = "black";
        let xcord = row * this.props.squareSize;
        let ycord = column * this.props.squareSize;
        //console.log('x:', xcord, 'y:',ycord, 'xTo:', xcord + this.props.squareSize, 'yTo:', ycord + this.props.squareSize);
        ctx.fillRect(xcord, ycord, xcord + this.props.squareSize, ycord + this.props.squareSize);
        ctx.strokeRect(xcord, ycord, xcord + this.props.squareSize, ycord + this.props.squareSize);
        ctx.stroke();
        ctx.fill();
       }
     }
  }

  componentDidMount() {
      this.drawCanvas();
  }

  render() {
    const canvasStyle = {
      backgroundColor: '#fff'
        };
      return (
          <div>
              <canvas ref="myCanvas" style={canvasStyle} width={500} height={500}/>
          </div>
      );
  }
  }


function mapStateToProps(state) {
  return {
    grid: state.grid,
    density: state.density,
    run: state.run,
    generations: state.generations,
    squareSize: state.squareSize
  };
}

function mapDispatchToProps(dispatch){
  return {
  actions: bindActionCreators(gridActions, dispatch)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(GridCanvas);
