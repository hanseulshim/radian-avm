import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import AgeOfProperties from './AgeOfProperties'
import './MarketPerformance1.scss'
// import MedianPrices from './MedianPrices'
import SaleToListRatio from './SaleToListRatio'
import Transactions from './Transactions'

const MarketPerformance1 = () => {
	return (
		<div className="market-performance-1 page">
			<Header title="Market Performance" />
			<div className="content-container">
				<Transactions />
				{/* <MedianPrices /> */}
				<div className="chart-row">
					<AgeOfProperties />
					<SaleToListRatio />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default MarketPerformance1
