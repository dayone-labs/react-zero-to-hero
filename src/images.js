import {bikes} from './data'
import _ from 'lodash'

const bikeIds = _.map(bikes, 'id')

function getImage(id) {
	if(_.includes(bikeIds, id)) {
		return `/img/${id}.jpg`
	}	else {
		return '/img/super_bike.jpg'
	}	
}

export default {
	getThumb: getImage,
	getImage: getImage
}