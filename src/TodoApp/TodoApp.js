import { useReducer, useState } from "react";

const initialTodos = [
	{ id: 1, title: "Todo #1" },
	{ id: 2, title: "Todo #2" },
	{ id: 3, title: "Todo #3" },
];

const types = {
	ADD: "ADD",
	UPDATE: "UPDATE",
	DELETE: "DELETE",
};

const reducer = (state, action) => {
	switch (action.type) {
		case types.DELETE:
			return state.filter((todo) => todo.id !== action.payload);
		case types.ADD:
			return [...state, action.payload];
		case types.UPDATE: {
			const todoEdit = action.payload;
			return state.map((todo) => (todo.id === todoEdit.id ? todoEdit : todo));
		}
		default:
			return state;
	}
};

const TodoApp = () => {
	const [todos, dispatch] = useReducer(reducer, initialTodos);
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = { id: Date.now(), title: text };
		dispatch({ type: types.ADD, payload: newTodo });
		setText("");
	};

	return (
		<div>
			<h1>To do App</h1>
			<ul>
				{todos.map((todo, key) => {
					return (
						<li key={key}>
							{todo.title}
							<button
								onClick={() =>
									dispatch({ type: types.DELETE, payload: todo.id })
								}
							>
								Delete
							</button>
							<button
								onClick={() =>
									dispatch({
										type: types.UPDATE,
										payload: { ...todo, id: todo.id, title: text },
									})
								}
							>
								update
							</button>
						</li>
					);
				})}
				<form onSubmit={handleSubmit}>
					<input
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="to do"
					/>
				</form>
			</ul>
		</div>
	);
};

export default TodoApp;
