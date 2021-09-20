import { useReducer } from "react";

const types = {
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT",
	RESET: "RESET",
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
			return 0;
		default:
			return state;
	}
};

const CounterApp = () => {
	const [counter, counterDispatch] = useReducer(reducer, 0);
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
