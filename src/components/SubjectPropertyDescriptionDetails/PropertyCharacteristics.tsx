import IconBath from 'assets/IconBath'
import IconBed from 'assets/IconBed'
import IconCalendar from 'assets/IconCalendar'
import IconCar from 'assets/IconCar'
import IconRuler from 'assets/IconRuler'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const PropertyCharacteristics = () => {
	const { propertyCharacteristics } = useContext(DataContext)
	const { source1, source2, source3 } = { ...propertyCharacteristics }
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
					<div className="column">
						Beds<sup>*</sup>
					</div>
					<div className="column">
						Bath<sup>*</sup>
					</div>
					<div className="column">
						SqFt<sup>*</sup>
					</div>
					<div className="column">
						Age (yrs)<sup>*</sup>
					</div>
					<div className="column">
						Garage<sup>*</sup>
					</div>
				</div>
				<div className="row icon-row">
					<div className="first">Source</div>
					<div className="column">
						<IconBed className="black" />
					</div>
					<div className="column">
						<IconBath className="black" />
					</div>
					<div className="column">
						<IconRuler className="black" />
					</div>
					<div className="column">
						<IconCalendar className="black" />
					</div>
					<div className="column">
						<IconCar className="black" />
					</div>
				</div>
				<div className="row source-1-row">
					<div className="first">{source1.label}</div>
					<div className="column">
						<span className="value">{source1.beds}</span>
					</div>
					<div className="column">
						<span className="value">{source1.baths}</span>
					</div>
					<div className="column">
						<span className="value">{source1.sqFt}</span>
					</div>
					<div className="column">
						<span className="value">{source1.age}</span>
					</div>
					<div className="column">
						<span className="value">{source1.garage}</span>
					</div>
				</div>
				<div className="row source-2-row">
					<div className="first">{source2.label}</div>
					<div className="column">
						<span className="value">{source2.beds}</span>
					</div>
					<div className="column">
						<span className="value">{source2.baths}</span>
					</div>
					<div className="column">
						<span className="value">{source2.sqFt}</span>
					</div>
					<div className="column">
						<span className="value">{source2.age}</span>
					</div>
					<div className="column">
						<span className="value">{source2.garage}</span>
					</div>
				</div>
				<div className="row source-2-row">
					<div className="first">{source3.label}</div>
					<div className="column">
						<span className="value">{source3.beds}</span>
					</div>
					<div className="column">
						<span className="value">{source3.baths}</span>
					</div>
					<div className="column">
						<span className="value">{source3.sqFt}</span>
					</div>
					<div className="column">
						<span className="value">{source3.age}</span>
					</div>
					<div className="column">
						<span className="value">{source3.garage}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyCharacteristics
