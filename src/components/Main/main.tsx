import { useSmallScreen } from '../../hooks/useSmallScreen'
import ThumbnailGallery from './ThumbnailGallery'
import SliderGallery from './SliderGallery'
import Product from './Product'
import './styles/main.scss'

const Main = () => {
	const smallScreen = useSmallScreen()
	return (
		<main className='main-section'>
			{smallScreen ? <SliderGallery /> : <ThumbnailGallery />}
			<Product />
		</main>
	)
}

export default Main
