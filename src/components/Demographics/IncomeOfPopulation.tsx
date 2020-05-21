import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const IncomeOfPopulation = () => {
	const { incomeOfPopulation } = useContext(DataContext)
	const { level1Label, level2Label, level3Label } = { ...incomeOfPopulation }
	return (
		<div className="income-of-population-container">
			<div className="section-title">
				<div>Income of Population</div>
				<div className="legend-container">
					<div className="legend">
						<div className="marker level-1" />
						<div>{level1Label}</div>
					</div>
					<div className="legend">
						<div className="marker level-2" />
						<div>{level2Label}</div>
					</div>
					<div className="legend">
						<div className="marker level-3" />
						<div>{level3Label}</div>
					</div>
				</div>
			</div>
			<div className="chart-container">Chart</div>
		</div>
	)
}

export default IncomeOfPopulation
