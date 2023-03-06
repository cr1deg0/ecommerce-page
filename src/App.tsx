import { useState } from 'react'
import { LightboxToggleContext } from './context/LightboxToggleContext'
import './globalStyles/base.scss'
import Header from './components/Header/main'
import Main from './components/Main/main'
import Lightbox from './components/Lightbox/Lightbox'

function App() {
	const [toggleLightbox, setToggleLightbox] = useState(false)

	return (
		<LightboxToggleContext.Provider
			value={{ toggleLightbox, setToggleLightbox }}
		>
			{toggleLightbox && <Lightbox />}
			<Header />
			<Main />
		</LightboxToggleContext.Provider>
	)
}

export default App
