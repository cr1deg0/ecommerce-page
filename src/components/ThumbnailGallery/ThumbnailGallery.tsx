import { useState } from 'react'
import { useLightboxToggle } from '../../context/LightboxToggleContext'
import productData from '../../data/productData'
import './styles/ThumbnailGallery.scss'
import Thumbnails from '../Thumbnails/Thumbnails'

const ThumbnailGallery = () => {
	const [thumbnailIndex, setThumbnailIndex] = useState(0)
	const { setToggleLightbox } = useLightboxToggle()
	const productImages = productData.images

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
