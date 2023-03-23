import {
	findByText,
	fireEvent,
	getByText,
	render,
	screen,
	waitFor,
} from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ProductContext } from '../context/ProductProvider'
import { CartContext } from '../context/CartProvider'
import { LightboxContext } from '../context/LightboxProvider'
import App from '../App'

const renderApp = () => {
	const mockProduct = {
		sku: '0000',
		name: 'name',
		description: 'description',
		price: 100,
		discount: 10,
		images: [
			{
				id: 0,
				src: 'src1',
				alt: 'alt1',
			},
			{
				id: 1,
				src: 'src2',
				alt: 'alt2',
			},
		],
	}
	const mockCartContext = {
		dispatch: vi.fn(),
		REDUCER_ACTIONS: {
			ADD: '',
			REMOVE: '',
			SUBMIT: '',
		},
		totalItems: 0,
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
					<App />
				</LightboxContext.Provider>
			</CartContext.Provider>
		</ProductContext.Provider>
	)
}
describe('<App />', () => {
	const user = userEvent.setup()
	beforeEach(() => {
		renderApp()
	})
	it('renders a cart button that opens after user selection', async () => {
		const openCartBtn = screen.getByRole('button', {
			name: /open shopping cart/i,
		})
		expect(openCartBtn).toBeInTheDocument()
		user.click(openCartBtn)
		expect(
			await screen.findByRole('heading', { name: /cart/i })
		).toBeInTheDocument()
	})

	// TO DO: current tests don't work
	// it('opens a lightbox on main image click', async () => {
	// 	screen.debug(
	// 		screen.getByRole('button', { name: /alt1. View images/i })
	// 	)
	// 	user.click(
	// 		screen.getByRole('button', { name: /alt1. View images/i })
	// 	)
	// 	expect(
	// 		await screen.findByRole('button', { name: /Close/i })
	// 	).toBeInTheDocument()
	// })
	// it('adds an item to the shopping cart when "Add to cart" pressed', async () => {
	// 	expect(screen.getByTestId('cart-items')).toHaveTextContent(
	// 		'No items in the cart'
	// 	)
	// 	await user.click(
	// 		screen.getByRole('button', { name: /Add to cart/i })
	// 	)
	// const mssge = await screen.findByText('1 item in the cart')
	// })
})
