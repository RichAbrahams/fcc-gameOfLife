import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {newGrid} from '../logic/gridFunctions';
import GridCanvas from './GridCanvas';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.increaseRows = this.increaseRows.bind(this);
    this.decreaseRows = this.decreaseRows.bind(this);
    this.increaseColumns = this.increaseColumns.bind(this);
    this.decreaseColumns = this.decreaseColumns.bind(this);
  }

componentWillReceiveProps (next) {
  console.log('next props: ', next);
  if (this.props.rows != next.rows || this.props.columns != next.columns) {
  this.props.actions.updateGrid(newGrid(next.rows, next.columns));
}
}

increaseRows(){
  this.props.actions.increaseRows(5);
}

decreaseRows(){
  this.props.actions.decreaseRows(5);
}

increaseColumns () {
  this.props.actions.increaseColumns(5);
}
decreaseColumns () {
  this.props.actions.decreaseColumns(5);
}


render(){

  return (
    <div>
      <GridCanvas />
      <button onClick={this.increaseRows}>rows +</button>
      <button onClick={this.decreaseRows}>rows -</button>
      <button onClick={this.increaseColumns}>columns +</button>
      <button onClick={this.decreaseColumns}>columns -</button>
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

function mapDispatchToProps(dispatch){
  return {
  actions: bindActionCreators(gridActions, dispatch)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
