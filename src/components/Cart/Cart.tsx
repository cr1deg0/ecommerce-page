import './styles/Cart.scss'
import CartItem from '../CartItem/CartItem'
import useCart from '../../hooks/useCart'

type PropsType = {
	setToggleCart: React.Dispatch<React.SetStateAction<boolean>>
}
const Cart = ({ setToggleCart }: PropsType) => {
	const { totalItems, cart } = useCart()

	const cartContent = () => {
		return totalItems === 0 ? (
			<p className='cart-empty'>Your cart is empty.</p>
		) : (
			<span className='cart-full'>
				{cart.map((item, index) => (
					<CartItem key={index} index={index} />
				))}
				<button className='cart-checkout'>Checkout</button>
			</span>
		)
	}
	return (
		<div className='cart'>
			<div className='cart-header'>
				<h3>Cart</h3>
				<button onClick={() => setToggleCart(false)}>
					<svg
						width='14'
						height='15'
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						aria-label='Close menu icon'
					>
						<path
							d='m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z'
							fillRule='evenodd'
						/>
					</svg>
				</button>
			</div>
			<div className='cart-container'>{cartContent()}</div>
		</div>
	)
}

export default Cart
