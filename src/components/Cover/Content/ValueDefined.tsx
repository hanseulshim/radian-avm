import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const ValueDefined = () => {
	const { avmValueDefined } = useContext(DataContext)
	const { lat, lng, description } = { ...avmValueDefined }
	return (
		<div className="value-defined-container">
			<div className="section-title">AVM Value Defined</div>
			<div className="description">{description}</div>
			<div className="map-container">
				<div>Map Container:</div>
				<div>{lat}</div>
				<div>{lng}</div>
			</div>
		</div>
	)
}

export default ValueDefined
