import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const getText = (text?: string | null): string => {
	return text ? text.split(';').slice(0, 2).join(',\n') : '--'
}
const getNum = (text?: number | null, dollar?: boolean): string => {
	const num = text ? text : 0
	return num ? (dollar ? `$${num.toLocaleString()}` : `${num}`) : '--'
}

const PropertyMap = () => {
	const { propertyNeighborhoodInfo } = useContext(DataContext)
	const {
		level1,
		level2,
		subdivision,
		taxes,
		taxParcelId,
		taxYear,
		zoning,
		township,
		section,
		assessedValue,
		femaDisasters,
		floodZone,
		mortageBank1,
		mortageBank2,
		hoa,
		contact,
		fees,
		phone
	} = {
		...propertyNeighborhoodInfo
	}

	return (
		<div className="property-map-container">
			<div className="legend-container">
				<div className="legend">
					<span className="line level1" />
					<span className="label">{level1?.label}</span>
				</div>
				<div className="legend">
					<span className="line level2" />
					<span className="label">{level2?.label}</span>
				</div>
			</div>
			<div className="map-container">
				<div className="info-container">
					<div className="panel panel-1">
						<div className="info-row">
							<span className="label">Subdivision</span>
							<span className="value">{getText(subdivision)}</span>
						</div>
						<div className="info-row">
							<span className="label">Taxes</span>
							<span className="value">{getNum(taxes, true)}</span>
						</div>
						<div className="info-row">
							<span className="label">Tax/Parcel ID</span>
							<span className="value">{getText(taxParcelId)}</span>
						</div>
						<div className="info-row">
							<span className="label">Tax Year</span>
							<span className="value">{getNum(taxYear)}</span>
						</div>
						<div className="info-row">
							<span className="label">Zoning</span>
							<span className="value">{getText(zoning)}</span>
						</div>
						<div className="info-row">
							<span className="label">Township</span>
							<span className="value">{getText(township)}</span>
						</div>
						<div className="info-row">
							<span className="label">Section</span>
							<span className="value">{getText(section)}</span>
						</div>
						<div className="info-row">
							<span className="label">Assessed Value</span>
							<span className="value">{getText(assessedValue)}</span>
						</div>
					</div>
					<div className="panel panel-2">
						<div className="info-row">
							<span className="label">FEMA Disasters</span>
							<span className="value multi">{getText(femaDisasters)}</span>
						</div>
						<div className="info-row">
							<span className="label">Flood Zone</span>
							<span className="value">{getText(floodZone)}</span>
						</div>
					</div>
					<div className="panel panel-3">
						<div className="info-row">
							<span className="label">1st Mortgage</span>
							<span className="value">{getText(mortageBank1?.name)}</span>
						</div>
						<div className="info-row">
							<span className="label">Amount</span>
							<span className="value">
								{getNum(mortageBank1?.amount, true)}
							</span>
						</div>
						<div className="info-row">
							<span className="label">2nd Mortgage</span>
							<span className="value">{getText(mortageBank2?.name)}</span>
						</div>
						<div className="info-row">
							<span className="label">Amount</span>
							<span className="value">
								{getNum(mortageBank2?.amount, true)}
							</span>
						</div>
					</div>
					<div className="panel panel-4">
						<div className="info-row">
							<span className="label">HOA</span>
							<span className="value">{getText(hoa)}</span>
						</div>
						<div className="info-row">
							<span className="label">Fees</span>
							<span className="value">{getText(fees)}</span>
						</div>
						<div className="info-row">
							<span className="label">Contact</span>
							<span className="value">{getText(contact)}</span>
						</div>
						<div className="info-row">
							<span className="label">Phone</span>
							<span className="value multi">{getText(phone)}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyMap
