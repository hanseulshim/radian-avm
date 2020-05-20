import React from 'react'
import IconMapMarker from 'assets/IconMapMarker'
import './MapMarker.scss'

const MapMarker = ({ lat, lng, text }: any) => {
	return (
		<div className="marker-container">
			<IconMapMarker />
			<span style={{ display: 'inline' }}>{text}</span>
		</div>
	)
}

export default MapMarker
