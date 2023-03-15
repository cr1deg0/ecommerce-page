import { useState, createContext, ReactElement } from 'react'

export interface LightboxToogleContextType {
	lightboxToggle: boolean
	setLightboxToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const LightboxContext =
	createContext<LightboxToogleContextType | null>(null)
// export const LightboxToggleContext = createContext<React.Dispatch<
// 	React.SetStateAction<boolean>
// > | null>(null)

type ChildrenType = { children: ReactElement | ReactElement[] }

const LightboxProvider = ({ children }: ChildrenType) => {
	const [lightboxToggle, setLightboxToggle] = useState(false)
	return (
		<LightboxContext.Provider
			value={{ lightboxToggle, setLightboxToggle }}
		>
			{children}
		</LightboxContext.Provider>
	)
}

export default LightboxProvider
