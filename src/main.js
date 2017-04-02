import React from 'react'
import _ from 'lodash'
import BikesList from './bikes-list'
import BikeDetails from './bike-details'
import Banner from './banner'
import {bikes} from './data'

const Main = () => (
	<div>
		<Banner />
		<div className='container-fluid'>
			<div className='row fill-height'>
				<div className='col-md-4 grey-panel pb-3'>
					<BikesList bikes={bikes} />
				</div>
				<div className='col-md-8'>
					<BikeDetails bike={bikes[0]} />
				</div>
			</div>
		</div>
	</div>
)

export default Main
