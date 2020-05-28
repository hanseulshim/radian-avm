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
	const [level1Coords, setLevel1Coords] = useState<geoJSON | null | undefined>({
		type: '',
		coordinates: [[[[0, 0]]]]
	})
	const [level2Coords, setLevel2Coords] = useState<geoJSON | null | undefined>({
		type: '',
		coordinates: [[[[0, 0]]]]
	})

	const { level1GeoJSON, level2GeoJSON } = { ...neighborhoodSummaryData }

	useEffect(() => {
		setSubjectCoords({ lat: lat ? lat : 0, lng: lng ? lng : 0 })
		setLevel1Coords(level1GeoJSON)
		setLevel2Coords(level2GeoJSON)
	}, [lat, lng, level1GeoJSON, level2GeoJSON])

	const handleApiLoaded = (map: any) => {
		const geoJson1 = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: { name: 'level1' },
					geometry: level1Coords
				}
			]
		}
		const geoJson2 = {
			type: 'FeatureCollection',
			features: [
				{
					type: 'Feature',
					properties: { name: 'level2' },
					geometry: level2Coords
				}
			]
		}

		map.data.addGeoJson(geoJson1)
		map.data.addGeoJson(geoJson2)
		map.data.setStyle(function (feature: any) {
			const name = feature.getProperty('name')
			return {
				fillOpacity: 0,
				strokeColor: name === 'level1' ? colors.azure : colors.brandyPunch,
				strokeWeight: 3
			}
		})
	}

	return (
		<>
			{lat && lng && (
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyCDqsUhKCXYQ3T_ErIXnVt0xoQa4wo_KOE'
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
