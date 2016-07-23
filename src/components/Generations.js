import React from 'react';
import {bindActionCreators} from 'redux';
import * as gridActions from '../actions/gridActions';
import {connect} from 'react-redux';

class Generations extends React.Component {
  constructor(props) {
    super(props);
  }

render(){
  let gens = this.props.generations.toString();
  while (gens.length < 4) {
    gens = "0" + gens;
  }

  return (
    <div className="generationsContainer">
      <p className="generationsText">{gens[0]}</p>
      <p className="generationsText">{gens[1]}</p>
      <p className="generationsText">{gens[2]}</p>
      <p className="generationsText">{gens[3]}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Generations);
