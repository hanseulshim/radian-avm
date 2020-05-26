import { DataContext } from 'components/App'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useContext } from 'react'
import AgeOfPopulation from './AgeOfPopulation'
import './Demographics.scss'
import Education from './Education'
import FamilyMakeup from './FamilyMakeup'
import IncomeOfPopulation from './IncomeOfPopulation'
import Level1Average from './Level1Average'
import Level2Average from './Level2Average'
import MarketAverages from './MarketAverages'
import NeighborhoodSummaryMap from './NeighborhoodSummaryMap'

const Demographics = () => {
	const { neighborhoodSummary } = useContext(DataContext)
	return (
		<div className="demographics page">
			<Header title="Demographics" />
			<div className="summary-container">
				<div className="header">Neighborhood Summary</div>
				<div className="description-container">
					<div className="description">{neighborhoodSummary}</div>
					<div>Comparison numbers are based on annual change</div>
				</div>
			</div>
			<div className="map-container">
				<NeighborhoodSummaryMap />
				<div className="panel market-averages-container">
					<MarketAverages />
				</div>
				<div className="panel family-makeup-container">
					<FamilyMakeup />
				</div>
				<div className="panel education-container">
					<Education />
				</div>
				<Level1Average />
				<Level2Average />
			</div>
			<div className="chart-row">
				<AgeOfPopulation />
				<IncomeOfPopulation />
			</div>
			<Footer />
		</div>
	)
}

export default Demographics
