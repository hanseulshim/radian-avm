import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const SaleToListRatio = () => {
	const { saleToListRatio } = useContext(DataContext)
	const { level1Label, level2Label } = { ...saleToListRatio }
	return (
		<div className="sale-to-list-ratio">
			<div className="section-title">
				<div>Sale to List Ratio</div>
				<div className="legend-container">
					<div className="legend">
						<div className="marker level1" />
						<div>{level1Label}</div>
					</div>
					<div className="legend">
						<div className="marker level2" />
						<div>{level2Label}</div>
					</div>
				</div>
			</div>
			<div className="chart-container">chart</div>
		</div>
	)
}

export default SaleToListRatio
