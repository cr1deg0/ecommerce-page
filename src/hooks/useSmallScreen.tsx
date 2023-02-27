import { useState, useEffect } from 'react'

export const useSmallScreen = () => {
	const [viewportWidth, setViewportWidth] = useState(
		window.innerWidth
	)

	// Set size according to overall breakpoints
	const screenBreakPoint = 500

	useEffect(() => {
		const handleWindowResize = () => {
			setViewportWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleWindowResize)
		return () =>
			window.removeEventListener('resize', handleWindowResize)
	}, [])

	return viewportWidth < screenBreakPoint ? true : false
}
