import IconLine from 'assets/IconLine'
import IconListed from 'assets/IconListed'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const MedianPrices = () => {
	const { medianPrices } = useContext(DataContext)
	const { atAGlance, level1Label, level2Label } = { ...medianPrices }
	return (
		<div className="median-prices">
			<div className="at-a-glance">
				<div className="title">At a Glance</div>
				<div className="description">{atAGlance}</div>
			</div>
			<div className="chart-container">
				<div className="section-title">
					<div>Median Prices</div>
					<div className="legend-container">
						<div className="legend">
							<div className="title">{level1Label} Median Value</div>
							<div className="row">
								<IconLine />
								Sold Properties
							</div>
							<div className="row">
								<IconListed />
								Listed Properties
							</div>
						</div>

						<div className="legend">
							<div className="title">{level2Label} Median Value</div>
							<div className="row">
								<IconLine className="green" />
								Sold Properties
							</div>
							<div className="row">
								<IconListed className="green" />
								Listed Properties
							</div>
						</div>
					</div>
				</div>
				<div className="chart">chart</div>
			</div>
		</div>
	)
}

export default MedianPrices
