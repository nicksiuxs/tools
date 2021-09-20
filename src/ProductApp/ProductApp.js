import { useReducer } from "react";
import productReducer, { initialState, types } from "./reducers/productReducer";

const ProductApp = () => {
	const [state, dispatch] = useReducer(productReducer, initialState);

	const { products, cart, activeProduct } = state;

	return (
		<div>
			<h2>Products</h2>
			<ul>
				{products.map((product, key) => {
					return (
						<li key={key}>
							{product.name}
							<button
								onClick={() =>
									dispatch({
										type: types.PRODUCT_ADD_CART,
										payload: product,
									})
								}
							>
								Add to cart
							</button>
							<button
								onClick={() => {
									dispatch({
										type: types.PRODUCT_SHOW,
										payload: product,
									});
								}}
							>
								Show
							</button>
						</li>
					);
				})}
			</ul>
			<h2>Cart</h2>
			<ul>
				{cart.map((product, key) => {
					return (
						<li key={key}>
							{product.name} - quantity: {product.quantity}
							<button
								onClick={() => {
									dispatch({
										type: types.PRODUCT_REMOVE_ONE,
										payload: product.id,
									});
								}}
							>
								-
							</button>
							<button
								onClick={() => {
									dispatch({ type: types.PRODUCT_ADD_CART, payload: product });
								}}
							>
								+
							</button>
							<button
								onClick={() =>
									dispatch({
										type: types.PRODUCT_REMOVE_CART,
										payload: product.id,
									})
								}
							>
								Remove from cart
							</button>
						</li>
					);
				})}
			</ul>
			<h2>Preview</h2>
			<p>{activeProduct.name}</p>
		</div>
	);
};

export default ProductApp;
