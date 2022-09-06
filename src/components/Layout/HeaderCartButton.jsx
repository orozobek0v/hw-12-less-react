import React, { useContext } from 'react'
import CartContext from '../../Store/cartContext'
import CartIcon from '../Icons/CartIcon'
import classes from './HeaderCartButton.module.css'

function HeaderCartButton({ onShowCart }) {
	const cartCtx = useContext(CartContext)

	const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
		return currNumber + item.amount
	}, 0)

	return (
		<button onClick={onShowCart} className={classes.button}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton
