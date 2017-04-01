import React from 'react'
import BikeDetails from './bike-details'
import Banner from './banner'
import {bikes} from './data'

const Main = React.createClass({
	render() {
		return (
			<div>
				<Banner />
				<BikeDetails bike={bikes[0]} />
			</div>
		)
	}
})

export default Main
