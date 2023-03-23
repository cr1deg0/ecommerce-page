import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ProductContext } from '../../../context/ProductProvider'
import { CartContext } from '../../../context/CartProvider'
import { LightboxContext } from '../../../context/LightboxProvider'
import Header from '../main'

const renderHeader = (qty: number) => {
	const mockProduct = {
		sku: '0000',
		name: 'name',
		description: 'description',
		price: 100,
		discount: 10,
		images: [],
	}
	const mockCartContext = {
		dispatch: vi.fn(),
		REDUCER_ACTIONS: {
			ADD: '',
			REMOVE: '',
			SUBMIT: '',
		},
		totalItems: qty,
		cart: [
			{
				sku: '0000',
				name: 'name',
				price: 10,
				qty: 2,
				img: { src: '', alt: 'alt' },
			},
		],
	}
	const mockLightbox = {
		lightboxToggle: false,
		setLightboxToggle: vi.fn(),
	}

	return render(
		<ProductContext.Provider value={mockProduct}>
			<CartContext.Provider value={mockCartContext}>
				<LightboxContext.Provider value={mockLightbox}>
					<Header />
				</LightboxContext.Provider>
			</CartContext.Provider>
		</ProductContext.Provider>
	)
}

describe('<Header />', () => {
	it('renders the logo', () => {
		renderHeader(0)
		expect(
			screen.getByRole('img', { name: /sneakers/i })
		).toBeInTheDocument()
	})
	it('renders a nav bar with 5 list items', () => {
		renderHeader(0)
		expect(screen.getByRole('navigation')).toBeInTheDocument()
		expect(screen.getAllByRole('listitem')).toHaveLength(5)
	})
	it('renders a button to open the shopping cart', () => {
		renderHeader(0)
		expect(
			screen.getByRole('button', { name: /open shopping cart/i })
		).toBeInTheDocument()
	})
	it('renders a cart empty message', () => {
		renderHeader(0)
		expect(
			screen.getByText(/no items in the cart/i)
		).toBeInTheDocument()
	})
	it('renders a message with number of items in cart', () => {
		renderHeader(3)
		expect(screen.getByTestId('cart-items')).toHaveTextContent('3')
	})
	it('renders a link to user account with a picture', () => {
		renderHeader(0)
		expect(
			screen.getByRole('link', { name: /account/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('img', { name: /profile picture/i })
		).toBeInTheDocument()
	})
})

describe('<Header /> navigation menu for small screen', () => {
	beforeEach(() => {
		window.innerWidth = 300
		fireEvent(window, new Event('resize'))
	})
	const user = userEvent.setup()

	it('renders a button to toggle the navigation menu', () => {
		renderHeader(0)
		expect(
			screen.getByRole('button', { name: /toggle navigation menu/i })
		).toBeInTheDocument()
	})
	it('renders with the navigation menu closed', () => {
		expect(
			screen.queryByRole('navigation', {
				name: /main menu/i,
			})
		).not.toBeInTheDocument()
	})
	it('opens the navigation menu after toggle button clicked', async () => {
		renderHeader(0)
		const toggleBtn = screen.getByRole('button', {
			name: /toggle navigation menu/i,
		})
		await user.click(toggleBtn)
		expect(
			screen.getByRole('navigation', {
				name: /main menu/i,
			})
		).toBeInTheDocument()
	})
	it('closes the navigtion menu after toggle button clicked', async () => {
		renderHeader(0)
		const toggleBtn = screen.getByRole('button', {
			name: /toggle navigation menu/i,
		})
		await user.click(toggleBtn)
		expect(
			screen.getByRole('navigation', {
				name: /main menu/i,
			})
		).toBeInTheDocument()
		await user.click(toggleBtn)
		expect(
			screen.queryByRole('navigation', {
				name: /main menu/i,
			})
		).not.toBeInTheDocument()
	})
})
