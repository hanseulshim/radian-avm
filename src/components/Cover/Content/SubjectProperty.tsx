import IconBath from 'assets/IconBath.svg'
import IconBed from 'assets/IconBed.svg'
import IconCar from 'assets/IconCar.svg'
import IconHouse from 'assets/IconHouse.svg'
import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import IconRuler from 'assets/IconRuler.svg'
import IconTrees from 'assets/IconTrees.svg'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const SubjectProperty = () => {
	const {
		subjectProperty: {
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
		}
	} = useContext(DataContext)
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
					<img src={IconBed} alt="Bed Icon" />
					<div className="value">{beds}</div>
				</div>
				<div className="info-container">
					<div>Bath</div>
					<img src={IconBath} alt="Bath Icon" />
					<div className="value">{bath}</div>
				</div>
				<div className="info-container">
					<div>SqFt</div>
					<img src={IconRuler} alt="SqFt Icon" />
					<div className="value">{sqFt}</div>
				</div>
				<div className="info-container">
					<div>Garage</div>
					<img src={IconCar} alt="Garage Icon" />
					<div className="value">{garage}</div>
				</div>
				<div className="info-container">
					<div>Lot Size</div>
					<img src={IconTrees} alt="Lot Size Icon" />
					<div className="value">{lotSize}</div>
				</div>
				<div className="info-container">
					<div>Built</div>
					<img src={IconHouse} alt="Built Icon" />
					<div className="value">{yearBuilt}</div>
				</div>
			</div>
		</div>
	)
}
export default SubjectProperty
