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
		exteriorFeatures
		// pool,
		// patioDeck,
		// roofing,
		// exterior,
		// cooling,
		// heating,
		// garageCarport,
		// water,
		// sewer,
		// flooring,
		// basementFinished
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
				</div>
			</div>
		</div>
	)
}

export default PropertyFeatures
