import React, {PropTypes} from 'react'

const InputSection = ({name, label, value, onChange}) => (
	<div className="form-group">
		<label>{label}</label>
		<input name={name} className="form-control" onChange={onChange} value={value || ''}/>
	</div>
)

export default React.createClass({
	displayName: 'AddNew',

	propTypes: {
		onSave: PropTypes.func.isRequired,
		onCancel: PropTypes.func.isRequired
	},

	getInitialState() {
		return {}
	},

	handleChange(e) {
		const {name, value} = e.target
		this.setState({[name]: value})
	},

	handleSave() {
		this.props.onSave(this.state)
	},

	render() {
		const {onCancel} = this.props
		const {
			name,
			brand,
			model,
			year,
			category,
			price,
			desc
		} = this.state

		return (
			<div className="container card p-3" >
				<h1>Add new</h1>
				<InputSection name="name" label="Title" value={name} onChange={this.handleChange} />
				<InputSection name="brand" label="Brand" value={brand} onChange={this.handleChange} />
				<InputSection name="model" label="Model" value={model} onChange={this.handleChange} />
				<InputSection name="year" label="Year" value={year} onChange={this.handleChange} />
				<InputSection name="category" label="Category" value={category} onChange={this.handleChange} />
				<InputSection name="price" label="Price" value={price} onChange={this.handleChange} />
				<div className="form-group">
					<label>Description</label>
					<textarea name="desc" className="form-control" rows="4" onChange={this.handleChange} value={desc}/>
				</div>
				<div className='text-right'>
					<button className='btn btn-success mr-1' onClick={this.handleSave} >Add</button>
					<button className='btn' onClick={onCancel}>Cancel</button>
				</div>
			</div>
		)
	}
})