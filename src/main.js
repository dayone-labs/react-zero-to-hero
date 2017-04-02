import React from 'react'
import uuid from 'uuid/v4'
import _ from 'lodash'
import BikesList from './bikes-list'
import BikeDetails from './bike-details'
import Banner from './banner'
import {bikes} from './data'

const Main = React.createClass({
	getInitialState() {
		return {
			selectedBike: bikes[0]
		}
	},

	selectBike(bike) {
		this.setState({
			selectedBike: bike
		})
	},

	render() {
		const { selectedBike } = this.state

		return (
			<div>
				<Banner />
				<div className='container-fluid'>
					<div className='row fill-height'>
						<div className='col-md-4 grey-panel pb-3'>
							<BikesList
								onSelect={this.selectBike}
								bikes={bikes} />
						</div>
						<div className='col-md-8'>
							<BikeDetails bike={selectedBike} />
						</div>
					</div>
				</div>
			</div>
		)
	}
})

export default Main
