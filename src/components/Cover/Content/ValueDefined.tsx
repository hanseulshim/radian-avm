import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const ValueDefined = () => {
	const {
		avmValueDefined: { latitude, longitude, description }
	} = useContext(DataContext)
	return (
		<div className="value-defined-container">
			<div className="section-title">AVM Value Defined</div>
			<div className="description">{description}</div>
			<div className="map-container">
				<div>Map Container:</div>
				<div>{latitude}</div>
				<div>{longitude}</div>
			</div>
		</div>
	)
}

export default ValueDefined
