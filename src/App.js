import React from 'react';
import './App.css';

// import { connect } from 'react-redux';

// import {
// 	increaseCounter,
// 	decreaseCounter,
// } from './redux/Counter/counter.actions';

// function App(props) {
// 	console.log('propsss', props )
// 	return (
// 		<div className='App'>
// 			<div>Count: {props.count}</div>
// 			<button onClick={() => props.increaseCounter()}>Increase Count</button>
// 			<button onClick={() => props.decreaseCounter()}>Decrease Count</button>
// 		</div>
// 	);
// }

// const mapStateToProps = (state) => {
// 	console.log('state:', state);
// 	return {
// 		count: state.counter.count,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increaseCounter: () => dispatch(increaseCounter()),
// 		decreaseCounter: () => dispatch(decreaseCounter()),
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './counterSlice';
import { decreaseCounter, increaseCounter } from './redux/Counter/counter.actions';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  console.log('datata', count)
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increaseCounter())}>Increment</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrement</button>
    </div>
  );
}
export default Counter