import { useState } from 'react'
import { useSmallScreen } from '../../hooks/useSmallScreen'

import './styles/Gallery.scss'

const Gallery = () => {
	return (
		<div className='gallery'>
			<div
				className='gallery--thumbnail'
				// role='radiogrxoup'
				// aria-label='Photo-gallery'
			>
				{/* <h3 className='sr-only' id='gallery--thumbnail-title'>
					Photo gallery
				</h3> */}
				{productImages.map((item) => (
					<>
						<input
							type='radio'
							key={item.id}
							id={`${item.id}`}
							name='thumbnails'
							value={`thumbnail=${item.id}`}
							className='thumbnail-btn'
						/>
						<label htmlFor={`${item.id}`}>
							<img
								src={item.src}
								alt={item.alt}
								className='thumbnail-img'
							/>
						</label>
					</>
				))}
			</div>
		</div>
	)
}

export default Gallery
