import { render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ProductContext } from '../../../context/ProductProvider'
import { CartContext } from '../../../context/CartProvider'
import { LightboxContext } from '../../../context/LightboxProvider'
import ThumbnailGallery from '../ThumbnailGallery'

const renderThumbnailGallery = () => {
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
					<ThumbnailGallery
						thumbnailIndex={0}
						setThumbnailIndex={vi.fn()}
					/>
				</LightboxContext.Provider>
			</CartContext.Provider>
		</ProductContext.Provider>
	)
}
describe('<ThumbnailGallery />', () => {
	const user = userEvent.setup()

	it('renders a button to open the lightbox', () => {
		renderThumbnailGallery()
		expect(
			screen.getByRole('button', { name: /alt1. View images/i })
		).toBeInTheDocument()
	})
	it('renders a group with thumbnail images', () => {
		renderThumbnailGallery()
		expect(screen.getByRole('group')).toBeInTheDocument()
	})
	it('renders a group with 2 images', () => {
		renderThumbnailGallery()
		expect(screen.getAllByRole('radio')).toHaveLength(2)
	})
	it('renders a group with 2 accessible images', () => {
		renderThumbnailGallery()
		expect(screen.getByRole('radio', { name: /alt1/i }))
		expect(screen.getByRole('radio', { name: /alt2/i }))
	})
})
