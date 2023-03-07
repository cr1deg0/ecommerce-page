import { useState } from 'react'
import { LightboxToggleContext } from './context/LightboxToggleContext'
import './globalStyles/base.scss'
import Header from './components/Header/main'
import Main from './components/Main/main'
import Lightbox from './components/Lightbox/Lightbox'
import { useSmallScreen } from './hooks/useSmallScreen'

function App() {
	const [toggleLightbox, setToggleLightbox] = useState(false)
	const smallScreen = useSmallScreen()

	return (
		<LightboxToggleContext.Provider
			value={{ toggleLightbox, setToggleLightbox }}
		>
			{toggleLightbox && !smallScreen && <Lightbox />}
			<Header />
			<Main />
		</LightboxToggleContext.Provider>
	)
}

export default App
