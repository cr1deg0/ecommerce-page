import React, { useState, useEffect } from 'react'
import { useSmallScreen } from '../../hooks/useSmallScreen'
import './styles/main.scss'
import NavBar from './NavBar'
import NavToggler from './NavToggler'
import Cart from '../Cart/Cart'

const Header = () => {
	const smallScreen = useSmallScreen()
	const [menuOpen, setMenuOpen] = useState(false)
	const [cartOpen, setCartOpen] = useState(false)

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
				<a className='sr-only' href=''>
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
						<button onClick={() => setCartOpen(true)}>
							<img src='./images/icon-cart.svg' alt='Shopping cart' />
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
			{/* {cartOpen && <Cart toggleCart={setCartOpen} />} */}
		</>
	)
}

export default Header
