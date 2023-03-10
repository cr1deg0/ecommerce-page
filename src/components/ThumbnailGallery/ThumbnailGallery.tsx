import { useState } from 'react'
import { useLightboxToggle } from '../../context/LightboxToggleContext'
import productImages from '../../data/productImages'
import './styles/ThumbnailGallery.scss'
import Thumbnails from '../Thumbnails/Thumbnails'

const ThumbnailGallery = () => {
	const [thumbnailIndex, setThumbnailIndex] = useState(0)
	const { setToggleLightbox } = useLightboxToggle()

	return (
		<div className='gallery--thumbnail-main'>
			<button onClick={() => setToggleLightbox(true)}>
				<img
					src={productImages[thumbnailIndex].src}
					alt={productImages[thumbnailIndex].alt}
					className='main-thumbnail-img'
				/>
			</button>
			<Thumbnails
				name={'gallery-thumbnails'}
				thumbnailIndex={thumbnailIndex}
				setThumbnailIndex={setThumbnailIndex}
			/>
		</div>
	)
}

export default ThumbnailGallery
