import React from 'react'
import uuid from 'uuid/v4'
import _ from 'lodash'
import logLifecycle from './log-lifecycle'
import BikesList from './bikes-list'
import BikeDetails from './bike-details'
import Modal from './modal'
import AddNew from './add-new'
import Banner from './banner'
import {bikes} from './data'

const Main = React.createClass({
	getInitialState() {
		return {
			bikes,
			selectedBike: bikes[0]
		}
	},

	selectBike(bike) {
		this.setState({
			selectedBike: bike
		})
	},

	showNewPopup() {
		this.setState({
			showNewPopup: true
		})
	},

	hideNewPopup() {
		this.setState({
			showNewPopup: false
		})
	},

	createNew(bikeData) {
		const bike = _.assign({id: uuid()}, bikeData)
		this.setState({
			bikes: _.concat(this.state.bikes, bike),
			showNewPopup: false
		})
	},

	render() {
		const { bikes, selectedBike, showNewPopup } = this.state

		return (
			<div>
				<Banner />
				<div className='container-fluid'>
					<div className='row fill-height'>
						<div className='col-md-4 grey-panel pb-3'>
							<hr/>
							<div className='text-center'>
								<button onClick={this.showNewPopup}
									className='btn btn-danger'>Add new</button>
							</div>
							<hr/>
							<BikesList
								onSelect={this.selectBike}
								bikes={bikes} />
						</div>
						<div className='col-md-8'>
							<BikeDetails bike={selectedBike} />
						</div>
					</div>
					<Modal visible={showNewPopup} onDismiss={this.hideNewPopup}>
						<AddNew onSave={this.createNew} onCancel={this.hideNewPopup}/>
					</Modal>
				</div>
			</div>
		)
	}
})

export default Main
