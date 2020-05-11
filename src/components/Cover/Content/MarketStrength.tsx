import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const MarketStrength = () => {
	const { marketStrength } = useContext(DataContext)
	return (
		<div className="market-strength-container">
			<div className="section-title">Market Strength</div>
			<div className="chart-container">{marketStrength}</div>
		</div>
	)
}

export default MarketStrength
