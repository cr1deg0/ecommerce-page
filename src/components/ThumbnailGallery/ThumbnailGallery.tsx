import { useState } from 'react'
import { useLightboxToggler } from '../../hooks/useLightbox'
import './styles/ThumbnailGallery.scss'
import Thumbnails from '../Thumbnails/Thumbnails'
import { useProduct } from '../../hooks/useProduct'

type PropsType = {
	thumbnailIndex: number
	setThumbnailIndex: React.Dispatch<React.SetStateAction<number>>
}
const ThumbnailGallery = ({
	thumbnailIndex,
	setThumbnailIndex,
}: PropsType) => {
	const lightboxToggler = useLightboxToggler()
	const product = useProduct()
	const productImages = product.images

	return (
		<div className='gallery--thumbnail-main'>
			<button onClick={() => lightboxToggler(true)}>
				<img
					src={productImages[thumbnailIndex].src}
					alt={`${productImages[thumbnailIndex].alt}. View images in gallery mode.`}
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
