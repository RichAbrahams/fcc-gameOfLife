import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
  return (
    <div>
      hello
    </div>
  );
}
}

function mapStateToProps(state) {
  return {
    grid: state.grid
  };
}

function mapDispatchToProps(dispatch){
  return {
  actions: bindActionCreators(gridActions, dispatch)
};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
