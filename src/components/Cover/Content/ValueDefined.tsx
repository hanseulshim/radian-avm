import { DataContext } from 'components/App'
import React, { useContext, useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import IconMapMarker from 'assets/IconMapMarker'
import { colors } from 'styles/colors.js'

const Marker = ({ lat, lng, text }: any) => {
	return <IconMapMarker color={'#BADA55'} />
}

const ValueDefined = () => {
	const { subjectProperty, avmValueDefined } = useContext(DataContext)
	const { lat, lng } = { ...subjectProperty }
	const [coords, setCoords] = useState({ lat: 0, lng: 0 })

	useEffect(() => {
		setCoords({ lat: lat ? lat : 0, lng: lng ? lng : 0 })
	}, [subjectProperty])

	const handleApiLoaded = (map: any, maps: any) => {
		console.log(map, maps)
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
					>
						<Marker lat={lat} lng={lng} text="My Marker" />
					</GoogleMapReact>
				)}
			</div>
		</div>
	)
}

export default ValueDefined
