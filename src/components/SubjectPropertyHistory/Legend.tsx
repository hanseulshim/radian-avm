import IconListed from 'assets/IconListed'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const Legend = () => {
	const { propertyValueTrend } = useContext(DataContext)
	const { medianPriceLevel1, medianPriceLevel2 } = { ...propertyValueTrend }
	return (
		<div className="section-title">
			<div>Property Value Trend</div>
			<div className="legend-container">
				<div className="legend">
					<div className="retail-distressed-marker">
						<div className="top" />
						<div className="bottom" />
					</div>
					<div>
						<div>Retail Price</div>
						<div>Distressed Price</div>
					</div>
				</div>
				<div className="legend">
					<div>
						<div className="row">
							<IconListed className="red" />
							<div>{medianPriceLevel1?.label} Retail Median</div>
						</div>
						<div className="row">
							<IconListed className="yellow" />
							<div>{medianPriceLevel2?.label} Retail Median</div>
						</div>
					</div>
				</div>
				<div className="legend">
					<div className="hpi" />
					<div>HPI</div>
				</div>
				<div className="legend">
					<div className="retail circle" />
					<div>Retail</div>
				</div>
				<div className="legend">
					<div className="distressed circle" />
					<div>Distressed</div>
				</div>
				<div className="legend">
					<div className="rental circle" />
					<div>Rental</div>
				</div>
				<div className="legend">
					<div className="flip circle" />
					<div>Flip</div>
				</div>
			</div>
		</div>
	)
}

export default Legend
