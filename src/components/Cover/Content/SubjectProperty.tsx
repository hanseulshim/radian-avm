import IconBath from 'assets/IconBath'
import IconBed from 'assets/IconBed'
import IconCar from 'assets/IconCar'
import IconHouse from 'assets/IconHouse'
import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import IconRuler from 'assets/IconRuler'
import IconTrees from 'assets/IconTrees'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const SubjectProperty = () => {
	const { subjectProperty } = useContext(DataContext)
	const {
		propertyAddress,
		propertyCity,
		propertyState,
		propertyZip,
		yearBuilt,
		dwellingType,
		imagePath,
		beds,
		bath,
		sqFt,
		garage,
		lotSize
	} = { ...subjectProperty }
	return (
		<div className="subject-property-container">
			<div className="info-row-1">
				<div>
					<div className="address">{propertyAddress}</div>
					<div className="city-state-zip">
						{propertyCity}, {propertyState} {propertyZip}
					</div>
				</div>
				<span className="dwelling-type">{dwellingType}</span>
			</div>
			<div className="image-container">
				<img
					src={imagePath ? imagePath : IconHouseUnavailable}
					alt="Subject Property"
				/>
			</div>
			<div className="info-row-2">
				<div className="info-container">
					<div>Beds</div>
					<IconBed />
					<div className="value">{beds}</div>
				</div>
				<div className="info-container">
					<div>Bath</div>
					<IconBath />
					<div className="value">{bath}</div>
				</div>
				<div className="info-container">
					<div>SqFt</div>
					<IconRuler />
					<div className="value">{sqFt}</div>
				</div>
				<div className="info-container">
					<div>Garage</div>
					<IconCar />
					<div className="value">{garage}</div>
				</div>
				<div className="info-container">
					<div>Lot Size</div>
					<IconTrees />
					<div className="value">{lotSize}</div>
				</div>
				<div className="info-container">
					<div>Built</div>
					<IconHouse />
					<div className="value">{yearBuilt}</div>
				</div>
			</div>
		</div>
	)
}
export default SubjectProperty
