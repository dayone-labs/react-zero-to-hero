import React from 'react'
import images from './images'

const BikeListElement = ({bike}) => (
	<li className='flex-row fill-space'>
		<div className='thumb'>
			<img src={images.getThumb(bike.id)} />
		</div>
		<div className='ml-2 text-white flex-grow'>
			<div><u><strong>{bike.name}</strong></u></div>
			<div>
				{bike.brand} {bike.model}
			</div>
			<div className='text-right'>
				<strong>{bike.price} PLN</strong>
			</div>
		</div>
	</li>
)

export default BikeListElement