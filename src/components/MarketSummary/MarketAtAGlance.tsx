import IconCircle from 'assets/IconCircle'
import IconHouse from 'assets/IconHouse'
import IconSquare from 'assets/IconSquare'
import IconTriangle from 'assets/IconTriangle'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import MarketMap from './MarketMap'

const MarketAtAGlance = () => {
	const { marketAtAGlance } = useContext(DataContext)
	return (
		<div className="market-at-a-glance">
			<div className="section-title">
				<div>Market at a Glance</div>
				<div className="legend-container">
					<div className="legend house">
						<IconHouse className="black house-round legend-icon" />
						<div className="description">Subject Property</div>
					</div>
					<div className="legend table">
						<div className="row">
							<div className="first"></div>
							<div className="column">Listed</div>
							<div className="column">U/C</div>
							<div className="column">Sold</div>
						</div>
						<div className="row">
							<div className="first">Retail</div>
							<div className="column">
								<IconCircle className="green legend-shadow" />
							</div>
							<div className="column">
								<IconSquare className="green legend-shadow" />
							</div>
							<div className="column">
								<IconTriangle className="green legend-shadow" />
							</div>
						</div>
						<div className="row">
							<div className="first">Distressed</div>
							<div className="column">
								<IconCircle className="red legend-shadow" />
							</div>
							<div className="column">
								<IconSquare className="red legend-shadow" />
							</div>
							<div className="column">
								<IconTriangle className="red legend-shadow" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="content-container">
				<div className="description">{marketAtAGlance}</div>
				<div className="map-container">
					<MarketMap />
				</div>
			</div>
		</div>
	)
}

export default MarketAtAGlance
