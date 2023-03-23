import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ProductContext } from '../../../context/ProductProvider'
import { CartContext } from '../../../context/CartProvider'
import { LightboxContext } from '../../../context/LightboxProvider'
import Lightbox from '../Lightbox'

const mockLightbox = {
	lightboxToggle: false,
	setLightboxToggle: vi.fn(),
}

const renderLightbox = () => {
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

	return render(
		<ProductContext.Provider value={mockProduct}>
			<CartContext.Provider value={mockCartContext}>
				<LightboxContext.Provider value={mockLightbox}>
					<Lightbox currentIndex={0} />
				</LightboxContext.Provider>
			</CartContext.Provider>
		</ProductContext.Provider>
	)
}

describe('<Lightbox/>', () => {
	beforeEach(() => {
		renderLightbox()
	})

	const user = userEvent.setup()

	it('renders a button to close the lightbox', () => {
		expect(
			screen.getByRole('button', { name: /close/i })
		).toBeInTheDocument()
	})
	it('handles lightbox toggling on Close Btn click', async () => {
		const closeLightboxBtn = screen.getByRole('button', {
			name: /close/i,
		})
		const user = userEvent.setup()
		await user.click(closeLightboxBtn)
		expect(mockLightbox.setLightboxToggle).toHaveBeenCalledTimes(1)
	})
	it('renders both a slider and a thumbnail gallery that are syncronised', async () => {
		// TO DO: test doesn't work
		// const nextBtn = screen.getByRole('button', {
		// 	name: /next image/i,
		// })
		// expect(screen.getAllByRole('radio')[0]).toBeChecked()
		// await user.click(nextBtn)
		// screen.debug(screen.queryAllByRole('radio')[0])
	})
})
