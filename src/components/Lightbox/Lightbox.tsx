import { useEffect, useState } from 'react'
import { useLightboxToggle } from '../../context/LightboxToggleContext'
import SliderGallery from '../SliderGallery/SliderGallery'
import Thumbnails from '../Thumbnails/Thumbnails'
import './styles/Lightbox.scss'

const Lightbox = () => {
	const [imgIndex, setImgIndex] = useState(0)
	const { setToggleLightbox } = useLightboxToggle()

	return (
		<div className='lightbox-container'>
			<button
				className='btn-close'
				onClick={() => setToggleLightbox(false)}
			>
				<svg
					width='14'
					height='15'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					aria-labelledby='close-icon'
				>
					<title id='close-icon'>X icon</title>
					<path
						d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
						fillRule='evenodd'
					/>
				</svg>
			</button>
			<div className='lightbox-slider'>
				<SliderGallery
					galleryIndex={imgIndex}
					setGalleryIndex={setImgIndex}
				/>
			</div>
			<div className='lightbox-thumbnails'>
				<span>
					<Thumbnails
						name={'lightbox-thumbnails'}
						thumbnailIndex={imgIndex}
						setThumbnailIndex={setImgIndex}
					/>
				</span>
			</div>
		</div>
	)
}

export default Lightbox
