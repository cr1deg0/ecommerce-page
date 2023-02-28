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
	return (
		<div className='gallery'>
			<button className='btn-previous'>
				<svg
					width='12'
					height='18'
					xmlns='http://www.w3.org/2000/svg'
					aria-role='image'
					aria-labelledby='btn-img-previous'
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
			<img
				src={productImages[0].src}
				alt={productImages[0].alt}
				className='main-img'
			/>
			<button className='btn-next'>
				<svg
					width='13'
					height='18'
					xmlns='http://www.w3.org/2000/svg'
					aria-role='image'
					aria-labelledby='btn-img-next'
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
