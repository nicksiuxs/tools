import { useReducer } from "react";

const types = {
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT",
	RESET: "RESET",
};

const initialState = 0;

// Mutador del estado inicial
const init = (value) => {
	return value + 1;
};

/**
 *
 * recibe el previo estado y retorna el nuev estado
 */
const reducer = (state, action) => {
	switch (action.type) {
		case types.INCREMENT:
			return state + 1;
		case types.DECREMENT:
			return state - 1;
		case types.RESET:
			return init(initialState);
		default:
			return state;
	}
};

const CounterApp = () => {
	const [counter, counterDispatch] = useReducer(reducer, initialState, init);
	return (
		<div>
			<h1>Clicks: {counter}</h1>
			<button onClick={() => counterDispatch({ type: types.INCREMENT })}>
				Increment
			</button>
			<button onClick={() => counterDispatch({ type: types.DECREMENT })}>
				Decrement
			</button>
			<button onClick={() => counterDispatch({ type: types.RESET })}>
				Reset
			</button>
		</div>
	);
};

export default CounterApp;
