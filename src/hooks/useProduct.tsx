import { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'

export const useProduct = () => {
	const products = useContext(ProductContext)

	if (!products) {
		throw new Error(
			'useProducts has to be used inside a ProductsContext.Provider'
		)
	}
	return products
}
