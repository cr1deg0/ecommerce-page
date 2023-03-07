import { useState } from 'react'
import { useSmallScreen } from '../../hooks/useSmallScreen'
import productImages from './data/productImages'
import './styles/SliderGallery.scss'

const SliderGallery = () => {
	const [index, setIndex] = useState(0)
	const smallScreen = useSmallScreen()

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
			<button
				className={
					smallScreen
						? 'btn-previous sm-screen-btn sm-screen-btn-previous'
						: 'btn-previous lg-screen-btn lg-screen-btn-previous'
				}
			>
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
						strokeWidth='3'
						fill='none'
						fillRule='evenodd'
					/>
				</svg>
			</button>

			<img
				src={productImages[index].src}
				alt={productImages[index].alt}
				className={
					smallScreen
						? 'slider-img sm-screen-img'
						: 'slider-img lg-screen-img'
				}
			/>
			<button
				className={
					smallScreen
						? 'btn-next sm-screen-btn sm-screen-btn-next'
						: 'btn-next lg-screen-btn lg-screen-btn-next'
				}
			>
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
