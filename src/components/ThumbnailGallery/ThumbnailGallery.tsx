import { useState } from 'react'
import { useLightboxToggler } from '../../hooks/useLightbox'
import './styles/ThumbnailGallery.scss'
import Thumbnails from '../Thumbnails/Thumbnails'
import { useProduct } from '../../hooks/useProduct'

const ThumbnailGallery = () => {
	const [thumbnailIndex, setThumbnailIndex] = useState(0)
	const lightboxToggler = useLightboxToggler()
	const product = useProduct()
	const productImages = product.images

	return (
		<div className='gallery--thumbnail-main'>
			<button onClick={() => lightboxToggler(true)}>
				<img
					src={productImages[thumbnailIndex].src}
					alt={productImages[thumbnailIndex].alt}
					className='main-thumbnail-img'
				/>
			</button>
			<span>
				<Thumbnails
					name={'gallery-thumbnails'}
					thumbnailIndex={thumbnailIndex}
					setThumbnailIndex={setThumbnailIndex}
				/>
			</span>
		</div>
	)
}

export default ThumbnailGallery
