import IconCircle from 'assets/IconCircle'
import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import IconSquare from 'assets/IconSquare'
import IconTriangle from 'assets/IconTriangle'
import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext } from 'react'

const getStatus = (status: string | null): string => {
	let className = ''
	const stat = status ? status : ''
	switch (stat.toLowerCase()) {
		case 'rental':
			className = 'status rental'
			break
		case 'flip rental':
		case 'flip sale':
			className = 'status flip'
			break
		default:
			className = 'status'
	}
	return className
}

const getCondition = (condition: string | null): string =>
	condition?.toLowerCase() === 'retail' ? 'green' : 'red'

const NotableListingSales = () => {
	const { featuredProperties } = useContext(DataContext)

	return (
		<div className="notable-listing-sales">
			<div className="section-title">Notable Listings &amp; Sales</div>
			<div className="listing-container">
				{featuredProperties
					?.slice(0, 6)
					.map(
						(
							{
								category,
								condition,
								distance,
								status,
								featureNumber,
								price,
								address,
								daysOnMarket,
								eventType,
								eventDate,
								imagePath
							},
							index
						) => (
							<div key={index} className="listing">
								<div className="image-container house-image-container">
									<img
										alt="house"
										src={imagePath ? imagePath : IconHouseUnavailable}
									/>
									<div className="row">
										<div className="distance">{distance} miles</div>
										<div className={getStatus(status)}>{status}</div>
									</div>
									<div className="feature-number">
										{category === 'listed' ? (
											<IconCircle className={getCondition(condition)}>
												{featureNumber}
											</IconCircle>
										) : category === 'u/c' ? (
											<IconSquare className={getCondition(condition)}>
												{featureNumber}
											</IconSquare>
										) : (
											<IconTriangle className={getCondition(condition)}>
												{featureNumber}
											</IconTriangle>
										)}
									</div>
								</div>
								<div className="info-container">
									<div className="row">
										<div className="price">{numeral(price).format('$0,0')}</div>
										<div className="right">
											{eventType} {eventDate}
										</div>
									</div>
									<div className="row">
										<div>{address}</div>
										<div className="right">{daysOnMarket} DOM</div>
									</div>
								</div>
							</div>
						)
					)}
			</div>
		</div>
	)
}

export default NotableListingSales
