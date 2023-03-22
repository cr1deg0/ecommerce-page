import { useProduct } from '../../hooks/useProduct'
import './styles/Thumbnails.scss'

type PropsType = {
	name: string
	thumbnailIndex: number
	setThumbnailIndex: React.Dispatch<React.SetStateAction<number>>
}
const Thumbnails = ({
	name,
	thumbnailIndex,
	setThumbnailIndex,
}: PropsType) => {
	const product = useProduct()
	const productImages = product.images

	return (
		<fieldset className='thumbnails'>
			<legend className='sr-only'>Product images</legend>
			{productImages.map((item) => (
				<span key={item.id}>
					<input
						type='radio'
						id={`thumbnail-${item.id}`}
						name={name}
						value={item.id}
						checked={thumbnailIndex === item.id}
						onChange={(e) => {
							setThumbnailIndex(parseInt(e.target.value))
						}}
						className={`thumbnail-btn-${item.id}`}
					/>
					<label htmlFor={`thumbnail-${item.id}`}>
						<span className='sr-only'>{item.alt}</span>
						<span>
							<img src={item.src} alt='' className='thumbnail-img' />
						</span>
					</label>
				</span>
			))}
		</fieldset>
	)
}

export default Thumbnails
