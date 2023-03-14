import { useContext } from 'react'
import {
	LightboxStateContext,
	LightboxToggleContext,
} from '../context/LightboxProvider'

export const useLightboxState = () => {
	const lightboxState = useContext(LightboxStateContext)
	if (!lightboxState) {
		throw new Error(
			'useLightboxToggle needs to be used within <LightboxToogleContext.Provider>'
		)
	}
	return lightboxState
}
export const useLightboxToggle = () => {
	const lightboxToggle = useContext(LightboxToggleContext)
	if (!lightboxToggle) {
		throw new Error(
			'useLightboxToggle needs to be used within <LightboxToogleContext.Provider>'
		)
	}
	return lightboxToggle
}
