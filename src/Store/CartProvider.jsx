import React, { useReducer } from 'react'
import CartContext from './cartContext'

const cartReducer = (state, action) => {
	if (action.type == 'ADD_FOOD') {
		const updatedItems = state.items.concat(action.food)
		const totalAmountPLUS =state.totalAmount+ action.food.price * action.food.amount

		const filteredArr = state.items.findIndex((item) => {
			return item.id == action.food.id
		})
		if (filteredArr !== -1) {
			state.items[filteredArr].amount++
			return{
				...state,
				items:[...state.items],
				totalAmount:totalAmountPLUS
			}
		}
		return {
			items: updatedItems,
			totalAmount: totalAmountPLUS,
		}
	}

	return state
}

function CartProvider(props) {
	const [stateOrderFood, dispatchOrderFood] = useReducer(cartReducer, {
		items: [],
		totalAmount: 0,
	})

	const addItem = (item) => {
		dispatchOrderFood({ type: 'ADD_FOOD', food: item })
	}
	const removeItems = (id) => {
		dispatchOrderFood({ type: 'DELETE_FOOD', id: id })
	}
	const clearCart = () => {
		dispatchOrderFood({ type: 'CLEAR_FOOD' })
	}

	const cartContext = {
		items: stateOrderFood.items,
		totalAmount: stateOrderFood.totalAmount,
		addItem: addItem,
		removeItem: removeItems,
		clearCart: clearCart,
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartProvider
