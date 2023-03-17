import './styles/CartItem.scss'
import useCart from '../../hooks/useCart'
import { useProduct } from '../../hooks/useProduct'
import useFormatPrice from '../../hooks/useFormatPrice'

type PropsType = { index: number }
const CartItem = ({ index }: PropsType) => {
	const { dispatch, REDUCER_ACTIONS, cart } = useCart()
	const cartItem = cart[index]

	const removeCartItem = () => {
		dispatch({
			type: REDUCER_ACTIONS.REMOVE,
			payload: { ...cartItem },
		})
	}

	return (
		<div className='cart-item'>
			<img src={cartItem.img.src} alt={cartItem.img.alt}></img>
			<span>
				<h5 className='item-data'>{cartItem.name}</h5>
				<p className='item-data'>
					{useFormatPrice(cartItem.price)} x {cartItem.qty}
					<span className='item-data bold'>
						{useFormatPrice(cartItem.price, 100, cartItem.qty)}
					</span>
				</p>
			</span>
			<button onClick={() => removeCartItem()}>
				<span className='sr-only'>Remove item from cart</span>
				<svg
					width='14'
					height='16'
					xmlns='http://www.w3.org/2000/svg'
					role='img'
					aria-label='Bin icon'
				>
					<path
						d='M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z'
						fillRule='nonzero'
					/>
				</svg>
			</button>
		</div>
	)
}

export default CartItem
