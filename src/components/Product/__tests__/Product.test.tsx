import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ProductContext } from '../../../context/ProductProvider'
import { CartContext } from '../../../context/CartProvider'
import { LightboxContext } from '../../../context/LightboxProvider'
import Product from '../Product'

const renderProduct = () => {
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
		totalItems: 1,
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
					<Product />
				</LightboxContext.Provider>
			</CartContext.Provider>
		</ProductContext.Provider>
	)
}

describe('<Product />', () => {
	const user = userEvent.setup()
	it('renders a main title', () => {
		renderProduct()
		expect(
			screen.getByRole('heading', { level: 1 })
		).toBeInTheDocument()
	})
	it('renders a secondary title', () => {
		renderProduct()
		expect(
			screen.getByRole('heading', { level: 2 })
		).toBeInTheDocument()
	})
	it('renders a description', () => {
		renderProduct()
		expect(screen.getByText(/description/i)).toBeInTheDocument()
	})
	it('renders the original price', () => {
		renderProduct()
		expect(screen.getByText(/100/i)).toBeInTheDocument()
	})
	it('renders the discount', () => {
		renderProduct()
		expect(screen.getByText(/10%/i)).toBeInTheDocument()
	})
	it('renders the discounted price', () => {
		renderProduct()
		expect(screen.getByText(/90/i)).toBeInTheDocument()
	})
	it('renders a button to decrease qty', () => {
		renderProduct()
		expect(
			screen.getByRole('button', { name: /Decrease/i })
		).toBeInTheDocument()
	})
	it('renders a button to increase qty', () => {
		renderProduct()
		expect(
			screen.getByRole('button', { name: /Increase/i })
		).toBeInTheDocument()
	})
	it('renders the qty of selected items', () => {
		renderProduct()
		expect(screen.getByTestId('product-qty')).toHaveTextContent('1')
	})
	it('renders a button to Add item to cart', () => {
		renderProduct()
		expect(
			screen.getByRole('button', { name: /Add to cart/i })
		).toBeInTheDocument()
	})
	it('increases qty of items on increase button click', async () => {
		renderProduct()
		const increaseBtn = screen.getByRole('button', {
			name: /Increase/i,
		})
		await user.click(increaseBtn)
		expect(screen.getByTestId('product-qty')).toHaveTextContent('2')
	})
	it('decreases qty of items on decrease button click', async () => {
		renderProduct()
		const increaseBtn = screen.getByRole('button', {
			name: /Increase/i,
		})
		const decreaseBtn = screen.getByRole('button', {
			name: /Decrease/i,
		})
		await user.click(increaseBtn)
		await user.click(increaseBtn)
		expect(screen.getByTestId('product-qty')).toHaveTextContent('3')
		await user.click(decreaseBtn)
		expect(screen.getByTestId('product-qty')).toHaveTextContent('2')
	})
	it('does not decrease qty below 1', async () => {
		renderProduct()
		const decreaseBtn = screen.getByRole('button', {
			name: /Decrease/i,
		})
		await user.click(decreaseBtn)
		expect(screen.getByTestId('product-qty')).toHaveTextContent('1')
	})
})
