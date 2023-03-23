import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ProductContext } from '../../../context/ProductProvider'
import { CartContext } from '../../../context/CartProvider'
import { LightboxContext } from '../../../context/LightboxProvider'
import SliderGallery from '../SliderGallery'

const renderSliderGallery = () => {
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
	const mockSetGalleryIndex = vi.fn()

	return render(
		<ProductContext.Provider value={mockProduct}>
			<CartContext.Provider value={mockCartContext}>
				<LightboxContext.Provider value={mockLightbox}>
					<SliderGallery
						galleryIndex={0}
						setGalleryIndex={mockSetGalleryIndex}
					/>
				</LightboxContext.Provider>
			</CartContext.Provider>
		</ProductContext.Provider>
	)
}

describe('<SliderGallery />', () => {
	it('renders an accessible image', () => {
		renderSliderGallery()
		expect(
			screen.getByRole('img', { name: /alt1/i })
		).toBeInTheDocument()
	})
	it('renders a button to select the next image', () => {
		renderSliderGallery()
		expect(
			screen.getByRole('button', { name: /next image/i })
		).toBeInTheDocument()
	})
	it('renders a button to select the previous image', () => {
		renderSliderGallery()
		expect(
			screen.getByRole('button', { name: /previous image/i })
		).toBeInTheDocument()
	})
})
