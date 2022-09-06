import React, { useContext } from 'react'
import CartContext from '../../Store/cartContext'
import Modal from '../Modal/Modal'
import classes from './Cart.module.css'

function Cart({ onCloseCart }) {
	const crtx = useContext(CartContext)
	const cartItems = (
		<ul className={classes.ulList}>
			{crtx.items.map((item) => (
				<>
					<li>
						<div>{item.name} </div>
						<div> (Things {item.amount}) </div> 
						<div>{item.amount * item.price}$</div>
					</li>
				</>
			))}
		</ul>
	)

	return (
		<Modal onCloseCart={onCloseCart}>
			{cartItems}
			<div className={classes.total}>
				<span>TotalAmount: {crtx.totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button onClick={onCloseCart}>Close</button>
				<button>Order</button>
			</div>
		</Modal>
	)
}

export default Cart
