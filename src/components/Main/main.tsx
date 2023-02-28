import { useSmallScreen } from '../../hooks/useSmallScreen'
import Gallery from './Gallery'
import MobileGallery from './MobileGallery'
import Product from './Product'
import './styles/main.scss'

const Main = () => {
	const smallScreen = useSmallScreen()
	return (
		<main className='main-section'>
			{smallScreen ? <MobileGallery /> : <Product />}
		</main>
	)
}

export default Main
