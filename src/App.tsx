import { useState } from 'react'
import { LightboxToggleContext } from './context/LightboxToggleContext'
import './globalStyles/base.scss'
import Header from './components/Header/main'
import SliderGallery from './components/SliderGallery/SliderGallery'
import ThumbnailGallery from './components/ThumbnailGallery/ThumbnailGallery'
import Product from './components/Product/Product'
import Lightbox from './components/Lightbox/Lightbox'
import { useSmallScreen } from './hooks/useSmallScreen'

function App() {
	const [imgIndex, setImgIndex] = useState(0)
	const [toggleLightbox, setToggleLightbox] = useState(false)
	const smallScreen = useSmallScreen()

	return (
		<LightboxToggleContext.Provider
			value={{ toggleLightbox, setToggleLightbox }}
		>
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
		</LightboxToggleContext.Provider>
	)
}

export default App
