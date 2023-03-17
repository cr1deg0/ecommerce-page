const useFormatPrice = (
	price: number,
	discount: number = 0,
	qty: number = 1
) => {
	if (discount < 0 || discount >= 100) {
		throw new Error('discount value outside defined range')
	} else {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(((price * (100 - discount)) / 100) * qty)
	}
}

export default useFormatPrice
