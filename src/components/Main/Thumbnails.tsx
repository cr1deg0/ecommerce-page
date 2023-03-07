import productImages from './data/productImages'
import './styles/Thumbnails.scss'

type PropsType = {
	thumbnailIndex: number
	setThumbnailIndex: React.Dispatch<React.SetStateAction<number>>
}
const Thumbnails = ({
	thumbnailIndex,
	setThumbnailIndex,
}: PropsType) => {
	return (
		<div className='thumbnails'>
			{productImages.map((item) => (
				<span key={item.id}>
					<input
						type='radio'
						id={`thumbnail-${item.id}`}
						name='thumbnails'
						value={item.id}
						checked={thumbnailIndex === item.id}
						onChange={(e) =>
							setThumbnailIndex(parseInt(e.target.value))
						}
						className={`thumbnail-btn-${item.id}`}
					/>
					<label htmlFor={`thumbnail-${item.id}`}>
						<img
							src={item.src}
							alt={item.alt}
							className='thumbnail-img'
						/>
					</label>
				</span>
			))}
		</div>
	)
}

export default Thumbnails
