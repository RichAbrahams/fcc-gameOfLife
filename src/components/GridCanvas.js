import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class GridCanvas extends React.Component {

  componentDidMount() {
      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect(10, 10, 55, 50);
      let squareSize = ctx.canvas.width / this.props.rows;
      console.log('SQ: ', squareSize);
  }

  render() {
    const canvasStyle = {
      width: '600px',
      height: '300px',
      backgroundColor: '#fff'
        };
      return (
          <div>
              <canvas ref="myCanvas" style={canvasStyle}/>
          </div>
      );
  }
  }

function mapStateToProps(state) {
  return {
    grid: state.grid,
    rows: state.rows,
    columns: state.columns,
    run: state.run,
    generations: state.generations
  };
}

export default connect(mapStateToProps)(GridCanvas);
