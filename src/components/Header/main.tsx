import { useSmallScreen } from '../../hooks/useSmallScreen'
import './styles/main.scss'
import NavBar from './NavBar'
import NavToggler from './NavToggler'

const Header = () => {
	const smallScreen = useSmallScreen()

	return (
		<header aria-label='Main menu'>
			<a className='sr-only' href=''>
				Skip to main content
			</a>
			<div className='header'>
				<div className='header--right'>
					{smallScreen && <NavToggler />}
					<img src='./images/logo.svg' alt='Sneakers' />
					<NavBar />
				</div>
				<div className='header--left'>
					<button>Cart</button>
					<a>Profile</a>
				</div>
			</div>
		</header>
	)
}

export default Header
