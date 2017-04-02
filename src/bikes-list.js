import React from 'react'
import _ from 'lodash'
import Bike from './bikes-list-element'

const BikesList = ({bikes}) => {
	const renderBike = (b) => (
		<Bike bike={b} key={b.id}/>
	)

	return (
		<ul className='bikes-list'>
			{_.map(bikes, renderBike)}
		</ul>
	)
}

export default BikesList
