import React, { useRef } from 'react'
import Input from '../UI/Input'
import classes from './MealsForm.module.css'

function MealsForm(props) {
	const amountRef = useRef(null)

	const submitHandler = (event) => {
		event.preventDefault()
		const amount = amountRef.current.value
		const convertAmount =+ amount
		props.onAddToCart(convertAmount)
	}
	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<Input
				ref={amountRef}
				label='Amount'
				input={{
					id: 'amount' + props.id,
					defaultValue: '1',
					min: '1',
					max: '10',
					type: 'number',
				}}
			/>
			<button> + Add</button>
		</form>
	)
}

export default MealsForm
