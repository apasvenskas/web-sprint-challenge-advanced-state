import React from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
import { connect } from 'react-redux';

function Wheel(props) {
  const { wheel, moveClokwise, moveCounterClokwise } = props;
  //return active class name based on wheel state
  const getActiveClass = (index) => {
    return wheel === index ? 'active' : '';
  };
    return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
// maps redux state of props
const mapStateProps = (state) => {
  return{
    wheel: state.wheel, // get the weel state from store. 
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    moveClockwise: () => dispatch(moveClockwise()),
    moveCounterClokwise: () => dispatch(moveCounterClockwise()),
  };
};

export default connect(mapStateProps, mapDispatchProps)(Wheel);