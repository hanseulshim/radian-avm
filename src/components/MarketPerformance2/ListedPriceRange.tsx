import IconActiveListings from 'assets/IconActiveListings'
import IconMedians from 'assets/IconMedians'
import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext } from 'react'

const ListedPriceRange = () => {
	const { avgListingPrice } = useContext(DataContext)
	return (
		<div className="chart-row">
			<div className="info-container">
				<div className="table-container">
					<div className="row header">
						<div className="first" />
						<div className="marker" />
						<div className="column">Prior Month</div>
						<div className="column">1 Year Ago</div>
					</div>
					<div className="row">
						<div className="first">{avgListingPrice?.level1Label}</div>
						<div className="marker level1"></div>
						<div className="column">
							${numeral(avgListingPrice?.level1PriorMonth).format('0.[00]a')}
						</div>
						<div className="column">
							${numeral(avgListingPrice?.level1PriorYear).format('0.[00]a')}
						</div>
					</div>
					<div className="row">
						<div className="first">{avgListingPrice?.level2Label}</div>
						<div className="marker level2"></div>
						<div className="column">
							${numeral(avgListingPrice?.level2PriorMonth).format('0.[00]a')}
						</div>
						<div className="column">
							${numeral(avgListingPrice?.level2PriorYear).format('0.[00]a')}
						</div>
					</div>
					<div className="row">
						<div className="first">{avgListingPrice?.level3Label}</div>
						<div className="marker level3"></div>
						<div className="column">
							${numeral(avgListingPrice?.level3PriorMonth).format('0.[00]a')}
						</div>
						<div className="column">
							${numeral(avgListingPrice?.level3PriorYear).format('0.[00]a')}
						</div>
					</div>
				</div>
				<div className="description">{avgListingPrice?.description}</div>
			</div>
			<div className="chart-container">
				<div className="sub-section-title">
					<div>Listed Price Range by DOM (as of Prior Month)</div>
					<div className="legend-container">
						<div className="legend">
							<IconActiveListings />
							<div>Average listings</div>
						</div>
						<div className="legend">
							<IconMedians />
							<div>Medians</div>
						</div>
					</div>
				</div>
				<div className="chart price-range">chart</div>
			</div>
		</div>
	)
}

export default ListedPriceRange
