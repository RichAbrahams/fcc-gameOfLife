import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';

class GridCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.drawCanvas = this.drawCanvas.bind(this);
    this.canvasClick = this.canvasClick.bind(this);
  }

componentDidUpdate(){
  this.drawCanvas();
}

  drawCanvas(){
     const myCanvas = ReactDOM.findDOMNode(this.refs.myCanvas);
     const ctx = this.refs.myCanvas.getContext('2d');
     const grid = this.props.grid;
     ctx.lineWidth = 1;
     ctx.strokeStyle = "#888";
     for (let row = 0; row < grid.length; row++) {
     for (let column = 0; column < grid[0].length; column++){
       let xcoord = column * this.props.squareSize;
       let ycoord = row * this.props.squareSize;
       ctx.fillRect(xcoord, ycoord, xcoord + this.props.squareSize, ycoord + this.props.squareSize);
       ctx.strokeRect(xcoord, ycoord, xcoord + this.props.squareSize, ycoord + this.props.squareSize);
       ctx.fillStyle = this.props.grid[row][column] == 1 ? '#222' : '#fff';
       ctx.stroke();
     }
   }
  }

canvasClick(){
  let ctx = this.refs.myCanvas.getContext('2d');

}

  componentDidMount() {
      this.drawCanvas();
      const canv = this.refs.myCanvas.getContext('2d');
      canv.canvas.addEventListener('click', () => {
        let mouseX = event.clientX - canv.canvas.offsetLeft;
        let mouseY = event.clientY - canv.canvas.offsetTop;
        console.log(mouseX, mouseY);
        console.log(canv.canvas.width);
        let row = Math.floor((this.props.grid.length / canv.canvas.height) * mouseY);
        let column = Math.floor((this.props.grid[0].length / canv.canvas.width) * mouseX);
        console.log('row ', row, 'column ', column);
      });

  }

  render() {
    const canvasStyle = {
      backgroundColor: '#fff'
        };
      return (
          <div>
              <canvas ref="myCanvas" style={canvasStyle} width={750} height={500} onClick={this.canvasClick}/>
          </div>
      );
  }
  }

function mapStateToProps(state) {
  return {
    grid: state.grid,
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
