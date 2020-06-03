import React from 'react'
import IconMapMarker from 'assets/IconMapMarker'
import './Marker.scss'

const MapMarker = ({ lat, lng, text, color = 'white', size = 12 }: any) => {
	return (
		<div className="marker-container" style={{ display: 'flex' }}>
			<IconMapMarker />
			<span style={{ display: 'inline', color: color, fontSize: size }}>
				{text}
			</span>
		</div>
	)
}

export default MapMarker
