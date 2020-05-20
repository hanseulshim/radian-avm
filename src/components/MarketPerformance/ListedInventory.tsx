import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const ListedInventory = () => {
	const { inventory } = useContext(DataContext)
	return (
		<div className="chart-row second">
			<div className="info-container">
				<div className="table-container">
					<div className="row header">
						<div className="first" />
						<div className="marker inventory" />
						<div className="column">Prior Month</div>
						<div className="column">1 Year Ago</div>
					</div>
					<div className="row">
						<div className="first">{inventory?.level1Label}</div>
						<div className="marker inventory level1"></div>
						<div className="column">{inventory?.level1PriorMonth}</div>
						<div className="column">{inventory?.level1PriorYear}</div>
					</div>
					<div className="row">
						<div className="first">{inventory?.level2Label}</div>
						<div className="marker inventory level2"></div>
						<div className="column">{inventory?.level2PriorMonth}</div>
						<div className="column">{inventory?.level2PriorYear}</div>
					</div>
					<div className="row">
						<div className="first">{inventory?.level3Label}</div>
						<div className="marker inventory level3"></div>
						<div className="column">{inventory?.level3PriorMonth}</div>
						<div className="column">{inventory?.level3PriorYear}</div>
					</div>
				</div>
				<div className="description">{inventory?.description}</div>
			</div>
			<div className="chart-container">
				<div className="sub-section-title">
					Listed Inventory by DOM (as of Prior Month)
				</div>
				<div className="chart inventory">chart</div>
				<div className="sub-section-title second">
					<div>Average DOM</div>
					<div className="legend-container">
						<div className="legend">
							<div className="marker">line</div>
							<div>Average listings</div>
						</div>
						<div className="legend">
							<div className="marker">line</div>
							<div>Sold</div>
						</div>
					</div>
				</div>
				<div className="chart inventory">chart</div>
			</div>
		</div>
	)
}

export default ListedInventory
