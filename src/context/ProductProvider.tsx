import {
	createContext,
	ReactElement,
	useEffect,
	useState,
} from 'react'

type ImgType = {
	id: number
	src: string
	alt: string
}
export type ProductType = {
	sku: string
	name: string
	description: string
	price: number
	discount: number
	images: ImgType[]
}

const initProductState: ProductType = {
	sku: '',
	name: '',
	description: '',
	price: 0,
	discount: 0,
	images: [],
}

export const ProductContext = createContext<null | ProductType>(null)

type ChildrenType = {
	children?: ReactElement | ReactElement[]
}

const ProductProvider = ({ children }: ChildrenType) => {
	const [product, setProduct] = useState(initProductState)

	useEffect(() => {
		fetch('../data/product.json')
			.then((res) => res.json())
			.then((data) => setProduct(data[0]))
			.catch((error) => console.log(error))
	}, [])
	return (
		<ProductContext.Provider value={product}>
			{children}
		</ProductContext.Provider>
	)
}
export default ProductProvider
