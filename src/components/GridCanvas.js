import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import deepcopy from 'deepcopy';

class GridCanvas extends React.Component {
        constructor(props) {
            super(props);
            this.drawCanvas = this.drawCanvas.bind(this);
            this.gridClick = this.gridClick.bind(this);
        }

        componentDidMount() {
            this.drawCanvas();
        }

        componentDidUpdate() {
            this.drawCanvas();
        }

        drawCanvas() {
        const myCanvas = ReactDOM.findDOMNode(this.refs.myCanvas);
        const ctx = this.refs.myCanvas.getContext('2d');
        const grid = this.props.grid;
        const squareSize = this.props.squareSize;
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#888";
        for (let row = 0; row < grid.length; row++) {
            for (let column = 0; column < grid[0].length; column++) {
                ctx.fillStyle = grid[row][column] == 1 ? '#222' : '#fff';
                let xcoord = column * squareSize;
                let ycoord = row * squareSize;
                ctx.fillRect(xcoord, ycoord, squareSize, squareSize);
                ctx.strokeRect(xcoord, ycoord, squareSize, squareSize);
            }
        }
        ctx.canvas.addEventListener('click', this.gridClick);
    }

        gridClick(e) {
            let mouseX = e.clientX - e.target.offsetLeft;
            let mouseY = e.clientY - e.target.offsetTop;
            let row = Math.floor((this.props.grid.length / e.target.height) * mouseY);
            let column = Math.floor((this.props.grid[0].length / e.target.width) * mouseX);
            let newGrid = deepcopy(this.props.grid);
            newGrid[row][column] = newGrid[row][column] == 1 ? 0 : 1;
            this.props.actions.updateGrid(newGrid);
            }

  render() {
    const canvasStyle = {
      backgroundColor: '#fff'
        };
      return (
          <div>
              <canvas
                ref="myCanvas"
                style={canvasStyle}
                width={this.props.canvas[0]}
                height={this.props.canvas[1]}/>
          </div>
      );
  }
  }

function mapStateToProps(state) {
    return {
        grid: state.grid,
        run: state.run,
        generations: state.generations,
        squareSize: state.squareSize,
        canvas: state.canvas
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gridActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GridCanvas);
