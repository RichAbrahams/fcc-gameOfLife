import React from 'react';
import Sliders from './Sliders';
import Generations from './Generations';
import ButtonControls from './ButtonControls';

const Controls = () => {

  return (
    <div className="controlsContainer">
      <Sliders />
      <Generations />
      <ButtonControls />
      </div>
  );
};

export default Controls;
