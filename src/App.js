import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './Store/CartProvider'

function App() {
	const [cartIsShown, setCartIsShown] = useState(true)

	const showCartHandler = () => {
		setCartIsShown(true)
	}

	const hideCartHandler = () => {
		setCartIsShown(false)
	}

	return (
		<CartProvider>
			{cartIsShown && <Cart onCloseCart={hideCartHandler} />}

			<Header onShowCart={showCartHandler} />
			<Meals />
		</CartProvider>
	)
}

export default App
