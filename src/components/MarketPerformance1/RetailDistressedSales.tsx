import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext } from 'react'

const RetailDistressedSales = () => {
	const { retailVsDistressedSales } = useContext(DataContext)
	return (
		<div className="retail-distressed-sales-container">
			<div className="section-title">Retail vs Distressed Sales</div>
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
							<div className="first">
								{retailVsDistressedSales?.level1Label}
							</div>
							<div className="marker level1"></div>
							<div className="column">
								{retailVsDistressedSales?.level1PriorMonth}
							</div>
							<div className="column">
								{retailVsDistressedSales?.level1PriorYear}
							</div>
						</div>
						<div className="row">
							<div className="first">
								{retailVsDistressedSales?.level2Label}
							</div>
							<div className="marker level2"></div>
							<div className="column">
								{retailVsDistressedSales?.level2PriorMonth}
							</div>
							<div className="column">
								{retailVsDistressedSales?.level2PriorYear}
							</div>
						</div>
						<div className="row">
							<div className="first">
								{retailVsDistressedSales?.level3Label}
							</div>
							<div className="marker level3"></div>
							<div className="column">
								$
								{numeral(retailVsDistressedSales?.level3PriorMonth).format(
									'0.[00]a'
								)}
							</div>
							<div className="column">
								$
								{numeral(retailVsDistressedSales?.level3PriorYear).format(
									'0.[00]a'
								)}
							</div>
						</div>
					</div>
					<div className="description">
						{retailVsDistressedSales?.description}
					</div>
				</div>
				<div className="chart-container">
					<div className="chart retail">chart</div>
				</div>
			</div>
		</div>
	)
}

export default RetailDistressedSales
