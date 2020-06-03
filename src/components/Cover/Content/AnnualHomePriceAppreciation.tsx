import IconDown from 'assets/IconDown'
import IconUp from 'assets/IconUp'
import { DataContext } from 'components/App'
import { getWidth } from 'helper'
import React, { useContext } from 'react'

const AnnualHomePriceAppreciation = () => {
	const { annualPriceAppreciation } = useContext(DataContext)
	const {
		level1Label,
		level1Value,
		level1Trend,
		level1Indicator,
		level2Label,
		level2Value,
		level2Trend,
		level2Indicator
	} = { ...annualPriceAppreciation }
	return (
		<div className="annual-home-price-container">
			<div className="section-title">Annual Home Price Appreciation</div>
			<div className="info-row">
				<div className="label">{level1Label}</div>
				{level1Indicator === 'up' ? (
					<IconUp className="black indicator" />
				) : level1Indicator === 'down' ? (
					<IconDown className="indicator red" />
				) : (
					<div className="indicator">&nbsp;</div>
				)}
				<div className="trend">{level1Trend ? `${level1Trend}%` : ''}</div>
				{level1Value && (
					<div className="bar-row">
						<div className="bar" style={{ width: getWidth(level1Value) }} />
					</div>
				)}
			</div>
			<div className="info-row level2">
				<div className="label">{level2Label}</div>
				{level2Indicator === 'up' ? (
					<IconUp className="black indicator" />
				) : level2Indicator === 'down' ? (
					<IconDown className="indicator red" />
				) : (
					<div className="indicator">&nbsp;</div>
				)}
				<div className="trend">{level2Trend ? `${level2Trend}%` : ''}</div>
				{level2Value && (
					<div className="bar-row">
						<div className="bar" style={{ width: getWidth(level2Value) }} />
					</div>
				)}
			</div>
		</div>
	)
}

export default AnnualHomePriceAppreciation
