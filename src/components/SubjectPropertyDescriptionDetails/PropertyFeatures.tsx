import PropertyFeatureHouse from 'assets/PropertyFeatureHouse.png'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const getText = (text?: string | null): string => {
	const str = text ? text : ''
	return str.length > 200 ? `${str.substring(0, 200)}...` : str
}

const PropertyFeatures = () => {
	const { propertyFeatures } = useContext(DataContext)
	const {
		interiorFeatures,
		exteriorFeatures,
		pool,
		patioDeck,
		roofing,
		exterior,
		cooling,
		heating,
		garageCarport,
		water,
		sewer,
		flooring,
		basementFinished
	} = {
		...propertyFeatures
	}
	return (
		<div className="property-features-container">
			<div className="section-title">Property Features</div>
			<div className="layout">
				<div className="info-container">
					<div>
						<div className="title">Interior Features</div>
						<div>{getText(interiorFeatures)}</div>
					</div>
					<div className="info">
						<div className="title">Exterior Features</div>
						<div>{getText(exteriorFeatures)}</div>
					</div>
				</div>
				<div className="image-container">
					<img src={PropertyFeatureHouse} alt="property feature" />
					<div className="label-container pool">
						<div className="label">Pool</div>
						<div className="value">{pool}</div>
					</div>
					<div className="label-container patio">
						<div className="label">Patio/Deck</div>
						<div className="value">{patioDeck}</div>
					</div>
					<div className="label-container roofing">
						<div className="label">Roofing</div>
						<div className="value">{roofing}</div>
					</div>
					<div className="label-container exterior">
						<div className="label">Exterior</div>
						<div className="value">{exterior}</div>
					</div>
					<div className="label-container cooling">
						<div className="label">Cooling</div>
						<div className="value">{cooling}</div>
					</div>
					<div className="label-container heating">
						<div className="label">Heating</div>
						<div className="value">{heating}</div>
					</div>
					<div className="label-container garage">
						<div className="label">Garage/Carport</div>
						<div className="value">{garageCarport}</div>
					</div>
					<div className="label-container water">
						<div className="label">Water</div>
						<div className="value">{water}</div>
					</div>
					<div className="label-container sewer">
						<div className="label">Sewer</div>
						<div className="value">{sewer}</div>
					</div>
					<div className="label-container flooring">
						<div className="label">Flooring</div>
						<div className="value">{flooring}</div>
					</div>
					<div className="label-container basement">
						<div className="label">Basement Finished</div>
						<div className="value">{basementFinished}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyFeatures
