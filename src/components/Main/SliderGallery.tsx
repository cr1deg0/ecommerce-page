import { useState } from 'react'
import productImages from './data/productImages'
import './styles/SliderGallery.scss'

const SliderGallery = () => {
	const [index, setIndex] = useState(0)

	const nextIndex = () => {
		index < productImages.length - 1
			? setIndex((prev) => prev + 1)
			: setIndex(0)
	}
	const prevIndex = () => {
		index > 0
			? setIndex((prev) => prev - 1)
			: setIndex(productImages.length - 1)
	}
	return (
		<div className='gallery--slider'>
			<button className='btn-previous'>
				<svg
					width='12'
					height='18'
					xmlns='http://www.w3.org/2000/svg'
					role='image'
					aria-labelledby='btn-img-previous'
					onClick={() => prevIndex()}
				>
					<title id='btn-img-previous'>Left pointing arrow</title>
					<path
						d='M11 1 3 9l8 8'
						stroke='#1D2026'
						strokeWidth='3'
						fill='none'
						fillRule='evenodd'
					/>
				</svg>
			</button>

			<img
				src={productImages[index].src}
				alt={productImages[index].alt}
				className='slider-img'
			/>
			<button className='btn-next'>
				<svg
					width='13'
					height='18'
					xmlns='http://www.w3.org/2000/svg'
					role='image'
					aria-labelledby='btn-img-next'
					onClick={() => nextIndex()}
				>
					<title id='btn-img-next'>Right pointing arrow</title>
					<path
						d='m2 1 8 8-8 8'
						stroke='#1D2026'
						strokeWidth='3'
						fill='none'
						fillRule='evenodd'
					/>
				</svg>
			</button>
		</div>
	)
}

export default SliderGallery
