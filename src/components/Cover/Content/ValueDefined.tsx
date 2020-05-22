import { DataContext } from 'components/App'
import React, { useContext, useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from 'components/Common/MapMarker'

const ValueDefined = () => {
	const { subjectProperty, avmValueDefined } = useContext(DataContext)
	const { lat, lng } = { ...subjectProperty }
	const [coords, setCoords] = useState({ lat: 0, lng: 0 })

	useEffect(() => {
		setCoords({ lat: lat ? lat : 0, lng: lng ? lng : 0 })
	}, [subjectProperty])

	const handleApiLoaded = (map: any, maps: any) => {
		map.mapTypeId = 'satellite'
		map.tilt = 45
	}

	return (
		<div className="value-defined-container">
			<div className="section-title">AVM Value Defined</div>
			<div className="description">{avmValueDefined}</div>
			<div className="map-container">
				{lat && lng && (
					<GoogleMapReact
						bootstrapURLKeys={{
							key: 'AIzaSyCDqsUhKCXYQ3T_ErIXnVt0xoQa4wo_KOE',
						}}
						center={coords}
						defaultZoom={18}
						yesIWantToUseGoogleMapApiInternals
						onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
						distanceToMouse={(): any => {}}
					>
						<MapMarker
							lat={lat}
							lng={lng}
							text={subjectProperty?.propertyAddress}
						/>
					</GoogleMapReact>
				)}
			</div>
		</div>
	)
}

export default ValueDefined
