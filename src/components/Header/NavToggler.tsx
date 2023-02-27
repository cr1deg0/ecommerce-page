import React, { useState } from 'react'
import './styles/NavToggler.scss'

const NavToggler = () => {
	const [navOpen, setNavOpen] = useState(false)

	const closedMenu = (
		<svg
			width='16'
			height='15'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-labelledby='title-icon-menu'
		>
			<title id='title-icon-menu'>A hamburguer menu icon</title>
			<path
				d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
				fill='#69707D'
				fillRule='evenodd'
			/>
		</svg>
	)

	return (
		<button
			aria-expanded='false'
			aria-label='Toggle Navigation'
			className='header-nav-toggler'
		>
			{navOpen ? '' : closedMenu}
		</button>
	)
}

export default NavToggler
