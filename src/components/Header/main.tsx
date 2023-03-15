import React, { useState, useEffect } from 'react'
import { useSmallScreen } from '../../hooks/useSmallScreen'
import './styles/main.scss'
import NavBar from './NavBar'
import NavToggler from './NavToggler'
import Cart from '../Cart/Cart'
import useCart from '../../hooks/useCart'

const Header = () => {
	const smallScreen = useSmallScreen()
	const [menuOpen, setMenuOpen] = useState(false)
	const [toggleCart, setToggleCart] = useState(false)
	const { totalItems } = useCart()

	useEffect(() => {
		if (!smallScreen) {
			setMenuOpen(true)
		} else {
			setMenuOpen(false)
		}
	}, [smallScreen])
	return (
		<>
			<header aria-label='Main menu'>
				<a className='sr-only' href='#main-section'>
					Skip to main content
				</a>
				<div className='header'>
					<div className='header--left'>
						{smallScreen && (
							<NavToggler
								menuOpen={menuOpen}
								setMenuOpen={setMenuOpen}
							/>
						)}
						<img src='./images/logo.svg' alt='Sneakers' />
						<NavBar menuOpen={menuOpen} />
					</div>
					<div className='header--right'>
						<button onClick={() => setToggleCart(true)}>
							<svg
								width='22'
								height='20'
								xmlns='http://www.w3.org/2000/svg'
								role='img'
							>
								<title>Open shopping cart</title>
								<path
									d='M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z'
									fillRule='nonzero'
								/>
							</svg>
							{totalItems > 0 ? (
								<span aria-live='polite'>
									{totalItems}
									<span className='sr-only'>items in the cart</span>
								</span>
							) : (
								<span aria-live='polite'>
									<span className='sr-only'>
										No items in the cart
									</span>
								</span>
							)}
						</button>
						<a href='/#' aria-label='Access your account data'>
							<img
								src='./images/image-avatar.png'
								alt='your profile picture'
							/>
						</a>
					</div>
				</div>
			</header>
			{toggleCart && <Cart setToggleCart={setToggleCart} />}
		</>
	)
}

export default Header
