import { ReactElement } from 'react'
import { createContext, useMemo, useReducer } from 'react'

export type CartItemType = {
	sku: string
	name: string
	price: number
	qty: number
}

type CartStateType = { cart: CartItemType[] }

const initCartState: CartStateType = { cart: [] }

const REDUCER_ACTION_TYPE = {
	ADD: 'ADD',
	REMOVE: 'REMOVE',
	SUBMIT: 'SUBMIT',
}

type ReducerActionType = typeof REDUCER_ACTION_TYPE

type ReducerAction = {
	type: string
	payload?: CartItemType
}

const reducer = (
	state: CartStateType,
	action: ReducerAction
): CartStateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.ADD: {
			if (!action.payload) {
				throw new Error('payload missing in ADD action')
			}
			const { sku, name, price, qty } = action.payload
			const filteredCart = state.cart.filter(
				(item) => item.sku !== sku
			)
			return {
				...state,
				cart: [
					...filteredCart,
					{ sku: sku, name: name, price: price, qty: qty },
				],
			}
		}
		case REDUCER_ACTION_TYPE.REMOVE: {
			if (!action.payload) {
				throw new Error('payload missing in REMOVE action')
			}
			const { sku } = action.payload
			const filteredCart = state.cart.filter(
				(item) => item.sku !== sku
			)
			return { ...state, cart: [...filteredCart] }
		}
		case REDUCER_ACTION_TYPE.SUBMIT: {
			return { ...state, cart: [] }
		}
		default:
			throw new Error('Undefined reducer action')
	}
}

const useCartContext = (initCartState: CartStateType) => {
	const [state, dispatch] = useReducer(reducer, initCartState)

	const REDUCER_ACTIONS = useMemo(() => {
		return REDUCER_ACTION_TYPE
	}, [])

	const totalItems = state.cart.reduce(
		(prev, cartItem) => prev + cartItem.qty,
		0
	)
	const cart = state.cart

	return { dispatch, REDUCER_ACTIONS, totalItems, cart }
}

type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
	dispatch: () => {},
	REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
	totalItems: 0,
	cart: [],
}

export const CartContext = createContext(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType) => {
	return (
		<CartContext.Provider value={useCartContext(initCartState)}>
			{children}
		</CartContext.Provider>
	)
}
