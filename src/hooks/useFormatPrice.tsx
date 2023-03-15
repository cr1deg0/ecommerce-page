const useFormatPrice = (
	price: number,
	discount: number = 100,
	qty: number = 1
) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(((price * discount) / 100) * qty)
}

export default useFormatPrice
