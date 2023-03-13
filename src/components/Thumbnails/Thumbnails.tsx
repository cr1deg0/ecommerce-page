import productData from '../../data/productData'
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
	const productImages = productData[0].images
	return (
		<div className='thumbnails'>
			{productImages.map((item) => (
				<span key={item.id}>
					<input
						type='radio'
						id={`thumbnail-${item.id}`}
						name={name}
						value={item.id}
						checked={thumbnailIndex === item.id}
						onChange={(e) => {
							console.log('clicked')
							setThumbnailIndex(parseInt(e.target.value))
						}}
						className={`thumbnail-btn-${item.id}`}
					/>
					<label htmlFor={`thumbnail-${item.id}`}>
						<span>
							<img
								src={item.src}
								alt={item.alt}
								className='thumbnail-img'
							/>
						</span>
					</label>
				</span>
			))}
		</div>
	)
}

export default Thumbnails
