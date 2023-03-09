import { useSmallScreen } from '../../hooks/useSmallScreen'
import ThumbnailGallery from './ThumbnailGallery'
import SliderGallery from './SliderGallery'
import Product from './Product'
import './styles/main.scss'
import { useState } from 'react'

const Main = () => {
	const [imgIndex, setImgIndex] = useState(0)
	const smallScreen = useSmallScreen()
	return (
		<main className='main-section'>
			{smallScreen ? (
				<SliderGallery
					galleryIndex={imgIndex}
					setGalleryIndex={setImgIndex}
				/>
			) : (
				<ThumbnailGallery />
			)}
			<Product />
		</main>
	)
}

export default Main
