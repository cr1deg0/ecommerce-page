import './styles/NavBar.scss'

const NavBar = () => {
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
	return (
		<nav aria-label='Main menu'>
			<div className='header-navigation'>
				<ul>
					{navigationLinks.map((link, index) => (
						<li key={index} className='menu-link'>
							<a href={link.href}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
