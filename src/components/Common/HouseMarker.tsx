import React from 'react'
import IconHouse from 'assets/IconHouse'
import './Marker.scss'

const HouseMarker = ({ lat, lng }: any) => {
	return (
		<div className="marker-container" style={{ display: 'flex' }}>
			<IconHouse className="black house-round" />
		</div>
	)
}

export default HouseMarker
