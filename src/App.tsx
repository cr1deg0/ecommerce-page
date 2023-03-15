import { useContext, useState } from 'react'
import './globalStyles/base.scss'
import Header from './components/Header/main'
import SliderGallery from './components/SliderGallery/SliderGallery'
import ThumbnailGallery from './components/ThumbnailGallery/ThumbnailGallery'
import Product from './components/Product/Product'
import Lightbox from './components/Lightbox/Lightbox'
import { useSmallScreen } from './hooks/useSmallScreen'
import { useLightboxState } from './hooks/useLightbox'
import { useProduct } from './hooks/useProduct'

function App() {
	const [imgIndex, setImgIndex] = useState(0)
	const smallScreen = useSmallScreen()
	const product = useProduct()
	const lighboxState = useLightboxState()

	return (
		<>
			{product.sku && lighboxState && !smallScreen && <Lightbox />}
			<Header />
			{product.sku ? (
				<main className='main-section' id='main-section'>
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
			) : (
				<main>
					<p>Loading ...</p>
				</main>
			)}
		</>
	)
}

export default App
