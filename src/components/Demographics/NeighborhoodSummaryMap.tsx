import { DataContext } from 'components/App'
import MapMarker from 'components/Common/MapMarker'
import GoogleMapReact from 'google-map-react'
import React, { useContext, useEffect, useState } from 'react'
import { colors } from 'styles/colors'

interface geoJSON {
	type: string | null
	coordinates: [[[[number, number]]]] | null
}

const PropertyMap = () => {
	const { neighborhoodSummaryData, subjectProperty } = useContext(DataContext)
	const { lat, lng } = { ...subjectProperty }
	const [subjectCoords, setSubjectCoords] = useState({ lat: 0, lng: 0 })
	const [level1Coords, setlevel1Coords] = useState<geoJSON | null | undefined>({
		type: '',
		coordinates: [[[[0, 0]]]],
	})

	const { level1GeoJSON } = { ...neighborhoodSummaryData }

	useEffect(() => {
		setSubjectCoords({ lat: lat ? lat : 0, lng: lng ? lng : 0 })
		setlevel1Coords(level1GeoJSON)
	}, [lat, lng, level1GeoJSON])

	const handleApiLoaded = (map: any) => {
		const geoJson1 = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					geometry: level1Coords,
				},
			],
		}

		map.data.addGeoJson(geoJson1)
		map.data.setStyle(function (feature: any) {
			return {
				fillOpacity: 0,
				strokeColor: colors.azure,
				strokeWeight: 5,
			}
		})
	}

	return (
		<>
			{lat && lng && (
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyCDqsUhKCXYQ3T_ErIXnVt0xoQa4wo_KOE',
					}}
					center={subjectCoords}
					defaultZoom={14}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
					distanceToMouse={(): any => {}}
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
		</>
	)
}

export default PropertyMap
