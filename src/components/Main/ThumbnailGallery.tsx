import { useState } from 'react'
// import { useToggleLightbox } from '../../hooks/useToggleLightbox'
import productImages from './data/productImages'
import './styles/ThumbnailGallery.scss'

const ThumbnailGallery = () => {
	const [thumbnailIndex, setThumbnailIndex] = useState(0)
	// const [toggleLightbox, setToggleLightbox] = useToggleLightbox()
	const [toggleLightbox, setToggleLightbox] = useState(false)

	return (
		<div className='gallery--thumbnail-main'>
			<button onClick={() => setToggleLightbox(true)}>
				<img
					src={productImages[thumbnailIndex].src}
					alt={productImages[thumbnailIndex].alt}
					className='main-thumbnail-img'
				/>
			</button>
			<div className='gallery--thumbnail'>
				{productImages.map((item) => (
					<span key={item.id}>
						<input
							type='radio'
							id={`thumbnail-${item.id}`}
							name='thumbnails'
							value={item.id}
							checked={thumbnailIndex === item.id}
							onChange={(e) =>
								setThumbnailIndex(parseInt(e.target.value))
							}
							className={`thumbnail-btn-${item.id}`}
						/>
						<label htmlFor={`thumbnail-${item.id}`}>
							<img
								src={item.src}
								alt={item.alt}
								className='thumbnail-img'
							/>
						</label>
					</span>
				))}
			</div>
		</div>
	)
}

export default ThumbnailGallery
