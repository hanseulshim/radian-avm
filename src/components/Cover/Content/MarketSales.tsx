import { DataContext } from 'components/App'
import { getWidth } from 'helper'
import React, { useContext } from 'react'

const MarketSales = () => {
	const { retail, distressed } = useContext(DataContext)

	return (
		<div className="market-sales-container">
			<div className="market-sales-column">
				<div className="title-wrapper">
					<div className="sub-section-title retail">Market Sales - Retail</div>
				</div>
				<div className="bar-row retail">
					{retail?.percentSales && (
						<div
							className="bar retail"
							style={{ width: getWidth(retail?.percentSales) }}
						>
							{retail?.percentSales}%
						</div>
					)}
				</div>
			</div>
			<div className="market-sales-column">
				<div className="sub-section-title distressed">
					Market Sales - Distressed
				</div>
				<div className="bar-row">
					{distressed?.percentSales && (
						<div
							className="bar distressed"
							style={{ width: getWidth(distressed?.percentSales) }}
						>
							{distressed?.percentSales}%
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default MarketSales
