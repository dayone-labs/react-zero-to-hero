import React from 'react'
import images from './images'

const BikeDetails = ({bike}) => (
	<div className='container'>
		<div className='row mt-3'>
			<h1 className='col-7'>{bike.name}</h1>
			<h1 className='col-5 text-right'>PLN {bike.price}</h1>
		</div>
		<div className='m-3 small'>{bike.desc}</div>
		<div className='row'>
			<div className='col-4'>Brand:</div>
			<div className='col-8 text-right'>{bike.brand}</div>
		</div>
		<div className='row'>
			<div className='col-4'>Model:</div>
			<div className='col-8 text-right'>{bike.model}</div>
		</div>
		<div className='row'>
			<div className='col-4'>Category:</div>
			<div className='col-8 text-right'>{bike.category}</div>
		</div>
		<div className='row'>
			<div className='col-4'>Seller:</div>
			<div className='col-8 text-right'>{bike.seller}</div>
		</div>
		<div className='row'>
			<div className='col-4'>Year:</div>
			<div className='col-8 text-right'>{bike.year}</div>
		</div>
		<div className='mt-3'>
			<img style={{maxWidth: '100%'}} src={images.getImage(bike.id)} />
		</div>
	</div>
)

export default BikeDetails