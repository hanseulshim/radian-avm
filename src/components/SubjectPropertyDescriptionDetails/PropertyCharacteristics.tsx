import IconBath from 'assets/IconBath'
import React from 'react'

const PropertyCharacteristics = () => {
	return (
		<div className="property-characteristics-container">
			<div className="section-title">
				<span>Property Characteristics</span>
				<div className="marker-container">
					<div className="marker" />
					<div>Subject Property</div>
				</div>
			</div>
			<div className="chart-container">
				property characteristics chart goes here
			</div>
			<div className="table-container">
				<div className="row">
					<div className="first" />
					<div className="column">Source</div>
					<div className="column">Beds</div>
					<div className="column">Beds</div>
					<div className="column">Beds</div>
				</div>
				<div className="row">
					<div className="first">Source</div>
					<div className="column">
						<IconBath className="black" />
					</div>
					<div className="column">
						<IconBath className="black" />
					</div>
					<div className="column">
						<IconBath className="black" />
					</div>
					<div className="column">
						<IconBath className="black" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyCharacteristics
