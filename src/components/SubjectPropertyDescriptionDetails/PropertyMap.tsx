import { DataContext } from 'components/App'
import React, { useContext, useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from 'components/Common/MapMarker'
import { colors } from 'styles/colors'

const getText = (text?: string | null): string => {
	return text ? text.split(';').slice(0, 2).join(',\n') : '--'
}
const getNum = (text?: number | null, dollar?: boolean): string => {
	const num = text ? text : 0
	return num ? (dollar ? `$${num.toLocaleString()}` : `${num}`) : '--'
}

const PropertyMap = () => {
	const { propertyNeighborhoodInfo, subjectProperty } = useContext(DataContext)
	const { lat, lng } = { ...subjectProperty }
	const [subjectCoords, setSubjectCoords] = useState({ lat: 0, lng: 0 })
	const [level1Coords, setlevel1Coords] = useState<
		| {
				type: string | null
				coordinates: [[[[number, number]]]] | null
		  }
		| null
		| undefined
	>({
		type: '',
		coordinates: [[[[0, 0]]]],
	})

	const [level2Coords, setlevel2Coords] = useState<
		| {
				type: string | null
				coordinates: [[[[number, number]]]] | null
		  }
		| null
		| undefined
	>({
		type: '',
		coordinates: [[[[0, 0]]]],
	})

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
		phone,
	} = {
		...propertyNeighborhoodInfo,
	}

	useEffect(() => {
		setSubjectCoords({ lat: lat ? lat : 0, lng: lng ? lng : 0 })
		setlevel1Coords(level1?.geoJSON)
		setlevel2Coords(level2?.geoJSON)
	}, [subjectProperty, propertyNeighborhoodInfo])

	const handleApiLoaded = (map: any, maps: any) => {
		const geoJson1 = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: { name: 'level1' },
					geometry: level1Coords,
				},
			],
		}

		const geoJson2 = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: { name: 'level2' },
					geometry: level2Coords,
				},
			],
		}

		map.data.addGeoJson(geoJson1)
		map.data.addGeoJson(geoJson2)
		map.data.setStyle(function (feature: any) {
			const name = feature.getProperty('name')
			return {
				fillOpacity: 0,
				strokeColor: name === 'level2' ? colors.azure05 : colors.azure,
				strokeWeight: name === 'level2' ? 5 : 3,
			}
		})
	}

	return (
		<div className="property-map-container">
			<div className="legend-container">
				<div className="legend">
					<span className="line">line</span>
					<span className="label">{level1?.label}</span>
				</div>
				<div className="legend">
					<span className="line">line</span>
					<span className="label">{level2?.label}</span>
				</div>
			</div>
			<div className="map-container">
				{lat && lng && (
					<GoogleMapReact
						bootstrapURLKeys={{
							key: 'AIzaSyCDqsUhKCXYQ3T_ErIXnVt0xoQa4wo_KOE',
						}}
						center={subjectCoords}
						defaultZoom={14}
						yesIWantToUseGoogleMapApiInternals
						onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
					>
						<MapMarker
							lat={lat}
							lng={lng}
							text={subjectProperty?.propertyAddress}
							color={colors.markerRed}
							size={14}
						/>
					</GoogleMapReact>
				)}
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
