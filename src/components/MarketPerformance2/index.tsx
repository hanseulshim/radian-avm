import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import CostTimeMarket from './CostTimeMarket'
import './MarketPerformance2.scss'
import RetailDistressedSales from './RetailDistressedSales'

const MarketPerformance2 = () => {
	return (
		<div className="market-performance page">
			<Header title="Market Performance" />
			<div className="content-container">
				<CostTimeMarket />
				<RetailDistressedSales />
			</div>
			<Footer />
		</div>
	)
}

export default MarketPerformance2
