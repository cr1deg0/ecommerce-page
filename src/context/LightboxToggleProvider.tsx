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

type ChildrenType = { children: ReactElement | ReactElement[] }

const LightboxToggleProvider = ({ children }: ChildrenType) => {
	const [toggleLightbox, setToggleLightbox] = useState(false)
	return (
		<LightboxToggleContext.Provider
			value={{ toggleLightbox, setToggleLightbox }}
		>
			{children}
		</LightboxToggleContext.Provider>
	)
}

export default LightboxToggleProvider
