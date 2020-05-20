import React from 'react'
import ListedInventory from './ListedInventory'
import ListedPriceRange from './ListedPriceRange'

const CostTimeMarket = () => {
	return (
		<div className="cost-time-market-container">
			<div className="section-title">Cost Over Time on the Market</div>
			<ListedPriceRange />
			<ListedInventory />
		</div>
	)
}

export default CostTimeMarket
