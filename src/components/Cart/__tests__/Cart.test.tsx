import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import { ProductContext } from '../../../context/ProductProvider'
import { CartContext } from '../../../context/CartProvider'
import { LightboxContext } from '../../../context/LightboxProvider'
import Cart from '../Cart'

describe('<Cart />', () => {
	const renderCart = (numItems: number) => {
		const mockProduct = {
			sku: '0000',
			name: 'name',
			description: 'description',
			price: 10,
			discount: 0,
			images: [],
		}
		const mockCartContext = {
			dispatch: vi.fn(),
			REDUCER_ACTIONS: {
				ADD: '',
				REMOVE: '',
				SUBMIT: '',
			},
			totalItems: numItems,
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

		const mockToggleCart = vi.fn()

		return render(
			<ProductContext.Provider value={mockProduct}>
				<CartContext.Provider value={mockCartContext}>
					<LightboxContext.Provider value={mockLightbox}>
						<Cart setToggleCart={mockToggleCart} />
					</LightboxContext.Provider>
				</CartContext.Provider>
			</ProductContext.Provider>
		)
	}

	it('renders a title', () => {
		renderCart(0)
		expect(
			screen.getByRole('heading', { name: /cart/i })
		).toBeInTheDocument()
	})
	it('renders a close cart button', () => {
		renderCart(0)
		const closeBtn = screen.getByRole('button', {
			name: /Close cart/i,
		})
		expect(closeBtn).toBeInTheDocument()
	})
	it('renders a cart empty message when no items in cart', () => {
		renderCart(0)
		expect(
			screen.getByText(/your cart is empty/i)
		).toBeInTheDocument()
	})
	it('renders a cart item', () => {
		renderCart(1)
		expect(
			screen.getByRole('img', { name: 'alt' })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: 'name' })
		).toBeInTheDocument()
		expect(screen.getByText(/10.00 x 2/i)).toBeInTheDocument()
		expect(screen.getByText(/20.00/i)).toBeInTheDocument()
		expect(
			screen.getByRole('button', { name: /remove item/i })
		).toBeInTheDocument()
	})
})
