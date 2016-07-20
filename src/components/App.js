import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {newGrid, nextGrid} from '../logic/gridFunctions';
import GridCanvas from './GridCanvas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increaseDensity = this.increaseDensity.bind(this);
    this.decreaseDensity = this.decreaseDensity.bind(this);
    this.startTimer = this.startTimer.bind(this);
  }

componentWillReceiveProps (next) {
  if (this.props.density != next.density) {
  this.props.actions.updateGrid(newGrid(next.density, next.density));
}
}

increaseDensity(){
  this.props.actions.increaseDensity(10);
}

decreaseDensity(){
  this.props.actions.decreaseDensity(10);
}

startTimer(){

  const x = setInterval(() => {
    let y = nextGrid(this.props.grid);
    this.props.actions.updateGrid(y);
  },1000);

}

render(){

  return (
    <div>
      <GridCanvas />
      <button onClick={this.increaseDensity}>Density +</button>
      <button onClick={this.decreaseDensity}>Density -</button>
      <button onClick={this.startTimer}>Start</button>
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    grid: state.grid,
    density: state.density,
    run: state.run,
    generations: state.generations
  };
}

function mapDispatchToProps(dispatch){
  return {
  actions: bindActionCreators(gridActions, dispatch)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
