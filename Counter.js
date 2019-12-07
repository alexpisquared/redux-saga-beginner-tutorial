/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react';

const Counter = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onTryGo,
  onLetGo,
  howDidItGo
}) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <br />
    <div>
      Clicked: <b> {value} </b>times
    </div>
    <hr />
    <hr />
    <button onClick={onTryGo}>Try Go</button>
    <button onClick={onLetGo}>Let Go</button>
    <div>
      It went, right? : <b> {howDidItGo} </b> ...sort of.
    </div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
