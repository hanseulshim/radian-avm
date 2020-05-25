import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import MarketAtAGlance from './MarketAtAGlance'
import './MarketSummary.scss'
import NotableListingSales from './NotableListingSales'

const MarketSummary = () => {
	return (
		<div className="market-summary page">
			<Header title="Demographics" />
			<MarketAtAGlance />
			<NotableListingSales />
			<Footer />
		</div>
	)
}

export default MarketSummary
