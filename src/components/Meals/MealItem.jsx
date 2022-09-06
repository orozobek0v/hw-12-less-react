import React, { useContext } from 'react'
import CartContext from '../../Store/cartContext'
import classes from './MealItem.module.css'
import MealsForm from './MealsForm'



function MealItem(props) {

  const cartCtx = useContext(CartContext)
	const price = `${props.price.toFixed(2)}`

	const addToCartHandler = (amount) => {
		const selectedFod = {
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount,
		}

    cartCtx.addItem(selectedFod)
	}

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealsForm id={props.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	)
}

export default MealItem
