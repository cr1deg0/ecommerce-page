import { useContext } from 'react'
import { LightboxContext } from '../context/LightboxProvider'

export const useLightboxState = () => {
	const currentLightboxToggleContext = useContext(LightboxContext)
	if (!currentLightboxToggleContext) {
		throw new Error(
			'useLightboxToggle needs to be used within <LightboxToogleContext.Provider>'
		)
	}
	const { lightboxToggle, setLightboxToggle } =
		currentLightboxToggleContext
	return lightboxToggle
}

export const useLightboxToggler = () => {
	const currentLightboxToggleContext = useContext(LightboxContext)
	if (!currentLightboxToggleContext) {
		throw new Error(
			'useLightboxToggle needs to be used within <LightboxToogleContext.Provider>'
		)
	}
	const { lightboxToggle, setLightboxToggle } =
		currentLightboxToggleContext
	return setLightboxToggle
}
