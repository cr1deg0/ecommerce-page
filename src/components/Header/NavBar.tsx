import './styles/NavBar.scss'
const navigationLinks = [
	{
		name: 'Collections',
		href: '#',
	},
	{
		name: 'Men',
		href: '#',
	},
	{
		name: 'Women',
		href: '#',
	},
	{
		name: 'About',
		href: '#',
	},
	{
		name: 'Contact',
		href: '#',
	},
]

type PropsType = { menuOpen: boolean }
const NavBar = ({ menuOpen }: PropsType) => {
	return (
		<nav
			aria-label='Main menu'
			style={{ display: menuOpen ? 'block' : 'none' }}
		>
			<ul className='header-navigation'>
				{navigationLinks.map((link, index) => (
					<li key={index} className='menu-link'>
						<a href={link.href}>{link.name}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
