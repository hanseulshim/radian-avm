import { DataContext } from 'components/App'
import GoogleMapReact from 'google-map-react'
import React, { useContext, useEffect, useState } from 'react'
import HouseMarker from 'components/Common/HouseMarker'
import IconCircle from 'assets/IconCircle'
import IconSquare from 'assets/IconSquare'
import IconTriangle from 'assets/IconTriangle'

interface nearbyProperty {
	lat: number | null
	lng: number | null
	category: string | null
	condition: string | null
}

interface featuredProperty {
	lng: number | null
	lat: number | null
	category: string | null
	condition: string | null
	distance: number | null
	status: string | null
	featureNumber: number | null
	price: number | null
	address: string | null
	daysOnMarket: number | null
	eventType: string | null
	eventDate: string | null
	imagePath: string | null
}

// Map Marker Component
const PropertyMarker = ({ property }: any) => {
	const { category, condition, featureNumber } = property
	const color =
		condition === 'Retail' ? 'green' : condition === 'Distressed' ? 'red' : ''
	// eslint-disable-next-line no-prototype-builtins
	if (property.hasOwnProperty('featureNumber')) {
		const icon =
			category === 'listed' ? (
				<IconCircle className={color}>{featureNumber}</IconCircle>
			) : category === 'u/c' ? (
				<IconSquare className={color}>{featureNumber}</IconSquare>
			) : (
				<IconTriangle className={color}>{featureNumber}</IconTriangle>
			)
		return <>{icon}</>
	} else {
		const icon =
			category === 'listed' ? (
				<IconCircle className={`legend-shadow  ${color}`} />
			) : category === 'u/c' ? (
				<IconSquare className={`legend-shadow  ${color}`} />
			) : (
				<IconTriangle className={`legend-shadow  ${color}`} />
			)
		return <>{icon}</>
	}
}

const MarketMap = () => {
	const { nearbyProperties, featuredProperties, subjectProperty } = useContext(
		DataContext
	)
	const { lat, lng } = { ...subjectProperty }
	const [coords, setCoords] = useState({ lat: 0, lng: 0 })
	const [nearbyPropertyCoords, setNearbyPropertyCoords] = useState([] as any)
	const [featurePropertyCoords, setFeaturePropertyCoords] = useState([] as any)

	useEffect(() => {
		setCoords({ lat: lat ? lat : 0, lng: lng ? lng : 0 })
		setNearbyPropertyCoords(nearbyProperties)
		setFeaturePropertyCoords(featuredProperties)
	}, [lat, lng, nearbyProperties])

	const handleApiLoaded = (map: any) => {
		map.mapTypeId = 'satellite'
	}

	return (
		<>
			{lat && lng && (
				<GoogleMapReact
					bootstrapURLKeys={{
						key: 'AIzaSyCDqsUhKCXYQ3T_ErIXnVt0xoQa4wo_KOE'
					}}
					center={coords}
					defaultZoom={14}
					yesIWantToUseGoogleMapApiInternals
					onGoogleApiLoaded={({ map }) => handleApiLoaded(map)}
					distanceToMouse={(): any => {}}
				>
					{nearbyPropertyCoords &&
						nearbyPropertyCoords.map((property: nearbyProperty, i: number) => {
							return (
								<PropertyMarker
									property={property}
									key={'property' + i}
									lat={property.lat}
									lng={property.lng}
								/>
							)
						})}
					{featurePropertyCoords &&
						featurePropertyCoords.map(
							(property: featuredProperty, i: number) => {
								return (
									<PropertyMarker
										property={property}
										key={'featuredProperty' + i}
										lat={property.lat}
										lng={property.lng}
									/>
								)
							}
						)}

					<HouseMarker lat={lat} lng={lng} />
				</GoogleMapReact>
			)}
		</>
	)
}

export default MarketMap
