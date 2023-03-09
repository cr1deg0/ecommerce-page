import { useState } from 'react'
import { useSmallScreen } from '../../hooks/useSmallScreen'
import productImages from './data/productImages'
import './styles/SliderGallery.scss'

type PropsType = {
	galleryIndex: number
	setGalleryIndex: React.Dispatch<React.SetStateAction<number>>
}
const SliderGallery = ({
	galleryIndex,
	setGalleryIndex,
}: PropsType) => {
	// const [index, setIndex] = useState(0)
	const smallScreen = useSmallScreen()

	const nextIndex = () => {
		galleryIndex < productImages.length - 1
			? setGalleryIndex((prev) => prev + 1)
			: setGalleryIndex(0)
	}
	const prevIndex = () => {
		galleryIndex > 0
			? setGalleryIndex((prev) => prev - 1)
			: setGalleryIndex(productImages.length - 1)
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
				src={productImages[galleryIndex].src}
				alt={productImages[galleryIndex].alt}
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
