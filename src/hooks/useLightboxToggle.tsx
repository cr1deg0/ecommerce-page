import { useContext } from 'react'
import { LightboxToggleContext } from '../context/LightboxToggleProvider'

const useLightboxToggle = () => {
	const currentLightboxToggleContext = useContext(
		LightboxToggleContext
	)
	if (!currentLightboxToggleContext) {
		throw new Error(
			'useLightboxToggle needs to be used within <LightboxToogleContext.Provider>'
		)
	}
	return currentLightboxToggleContext
}
export default useLightboxToggle
