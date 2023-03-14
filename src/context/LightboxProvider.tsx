import { useState, createContext, ReactElement } from 'react'

export interface LightboxToogleContextType {
	toggleLightbox: boolean
	setToggleLightbox: React.Dispatch<React.SetStateAction<boolean>>
}

export const LightboxContext =
	createContext<LightboxToogleContextType | null>(null)
// export const LightboxToggleContext = createContext<React.Dispatch<
// 	React.SetStateAction<boolean>
// > | null>(null)

type ChildrenType = { children: ReactElement | ReactElement[] }

const LightboxProvider = ({ children }: ChildrenType) => {
	const [toggleLightbox, setToggleLightbox] = useState(false)
	return (
		<LightboxContext.Provider
			value={{ toggleLightbox, setToggleLightbox }}
		>
			{children}
		</LightboxContext.Provider>
	)
}

export default LightboxProvider
