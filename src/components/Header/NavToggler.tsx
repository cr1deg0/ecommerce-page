import './styles/NavToggler.scss'

type PropsType = {
	menuOpen: boolean
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NavToggler = ({ menuOpen, setMenuOpen }: PropsType) => {
	const openMenuIcon = (
		<svg
			width='16'
			height='15'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-labelledby='title-icon-open-menu'
		>
			<title id='title-icon-open-menu'>A hamburguer menu icon</title>
			<path
				d='M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z'
				fill='#69707D'
				fillRule='evenodd'
			/>
		</svg>
	)
	const closeMenuIcon = (
		<svg
			width='14'
			height='15'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-labelledby='title-icon-close-menu'
		>
			<title id='title-icon-close-menu'>A close menu icon</title>
			<path
				d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
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
			onClick={() => setMenuOpen((prev) => !prev)}
			tabIndex={0}
		>
			{menuOpen ? closeMenuIcon : openMenuIcon}
		</button>
	)
}

export default NavToggler
