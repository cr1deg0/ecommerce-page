import { useState } from 'react'
import { useSmallScreen } from '../../hooks/useSmallScreen'
import './styles/Gallery.scss'

const productImages = [
	{
		id: 0,
		src: './images/image-product-1.jpg',
		alt: 'A pair of brown and white sweade sneakers with rubber outer sole',
	},
	{
		id: 1,
		src: '/images/image-product-2.jpg',
		alt: 'A pair of brown and white sweade sneakers with rubber outer sole on top of two stones',
	},
	{
		id: 2,
		src: '/images/image-product-3.jpg',
		alt: 'One brown and white sweade sneakers with rubber outer sole on top of two stones',
	},
	{
		id: 3,
		src: '/images/image-product-4.jpg',
		alt: 'One brown and white sweade sneakers with rubber outer sole on top of two stones',
	},
]

const Gallery = () => {
	const smallScreen = useSmallScreen()
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
	// console.log(productImages.length)
	return (
		<div className='gallery'>
			{smallScreen && (
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
							stroke-width='3'
							fill='none'
							fillRule='evenodd'
						/>
					</svg>
				</button>
			)}
			<img
				src={productImages[index].src}
				alt={productImages[index].alt}
				className='main-img'
			/>
			{smallScreen && (
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
							stroke-width='3'
							fill='none'
							fillRule='evenodd'
						/>
					</svg>
				</button>
			)}
			<div className='gallery--thumbnail'>
				{productImages.map((item) => (
					<button key={item.id} className='thumbnail-btn'>
						<img
							src={item.src}
							alt={item.alt}
							className='thumbnail-img'
						/>
					</button>
				))}
			</div>
		</div>
	)
}

export default Gallery
