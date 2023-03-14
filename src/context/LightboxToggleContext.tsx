import {
	useState,
	createContext,
	useContext,
	ReactElement,
} from 'react'

interface LightboxToogleContextType {
	toggleLightbox: boolean
	setToggleLightbox: React.Dispatch<React.SetStateAction<boolean>>
}

export const LightboxToggleContext =
	createContext<LightboxToogleContextType | null>(null)

export const useLightboxToggle = () => {
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
