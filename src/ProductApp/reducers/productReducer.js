const types = {
	PRODUCT_SHOW: "PRODUCT_SHOW",
	PRODUCT_ADD_CART: "PRODUCT_ADD_CART",
	PRODUCT_REMOVE_CART: "PRODUCT_REMOVE_CART",
	PRODUCT_REMOVE_ONE: "PRODUCT_REMOVE_ONE",
};

const initialState = {
	products: [
		{ id: 1, name: "producto 1" },
		{ id: 2, name: "producto 2" },
	],
	cart: [{ id: 1, name: "producto 1", quantity: 1 }],
	activeProduct: { id: 2, name: "producto 2" },
};

const productReducer = (state, action) => {
	switch (action.type) {
		case types.PRODUCT_SHOW:
			return {
				...state,
				activeProduct: action.payload,
			};

		case types.PRODUCT_ADD_CART: {
			const newProduct = action.payload;
			const isContainProduct = state.cart.find(
				(product) => product.id === newProduct.id
			);

			return isContainProduct
				? {
						...state,
						cart: state.cart.map((product) =>
							product.id === newProduct.id
								? { ...product, quantity: product.quantity + 1 }
								: product
						),
				  }
				: {
						...state,
						cart: [...state.cart, { ...action.payload, quantity: 1 }],
				  };
		}

		case types.PRODUCT_REMOVE_CART:
			return {
				...state,
				cart: state.cart.filter((product) => product.id !== action.payload),
			};

		case types.PRODUCT_REMOVE_ONE: {
			const productDelete = state.cart.find(
				(product) => product.id === action.payload
			);

			return productDelete.quantity > 1
				? {
						...state,
						cart: state.cart.map((product) =>
							product.id === action.payload
								? { ...product, quantity: product.quantity - 1 }
								: product
						),
				  }
				: {
						...state,
						cart: state.cart.filter(
							(product) => product.id !== productDelete.id
						),
				  };
		}

		default:
			return state;
	}
};

export { initialState, types };
export default productReducer;
