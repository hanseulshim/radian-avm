import React from 'react'
import AnnualHomePriceAppreciation from './AnnualHomePriceAppreciation'
import ColumnContent from './ColumnContent'
import './Content.scss'
import MarketSales from './MarketSales'
import MarketStrength from './MarketStrength'
import SubjectProperty from './SubjectProperty'
import ValueDefined from './ValueDefined'

const Content = () => (
	<div className="content-container">
		<SubjectProperty />
		<ColumnContent />
		<ValueDefined />
		<div className="bottom-column-container">
			<MarketSales />
			<AnnualHomePriceAppreciation />
			<MarketStrength />
		</div>
	</div>
)

export default Content
