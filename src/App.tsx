import { useState } from 'react'
import './globalStyles/base.scss'
import Header from './components/Header/main'
import SliderGallery from './components/SliderGallery/SliderGallery'
import ThumbnailGallery from './components/ThumbnailGallery/ThumbnailGallery'
import Product from './components/Product/Product'
import Lightbox from './components/Lightbox/Lightbox'
import { useSmallScreen } from './hooks/useSmallScreen'
import useLightboxToggle from './hooks/useLightboxToggle'
import { useProduct } from './hooks/useProduct'

function App() {
	const [imgIndex, setImgIndex] = useState(0)
	const smallScreen = useSmallScreen()
	const { toggleLightbox, setToggleLightbox } = useLightboxToggle()

	return (
		<>
			{toggleLightbox && !smallScreen && <Lightbox />}
			<Header />
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
		</>
	)
}

export default App
