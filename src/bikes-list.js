import React from 'react'
import _ from 'lodash'

import Bike from './bikes-list-element'

const BikesList = ({bikes, onSelect}) => {
  const renderBike = (b) => (
    <Bike bike={b} onSelect={onSelect} key={b.id}/>
  )

	return (
    <ul className='bikes-list'>
			{_.map(bikes, renderBike)}
		</ul>
	)
}

export default BikesList