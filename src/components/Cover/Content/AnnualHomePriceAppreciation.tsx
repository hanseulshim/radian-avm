import IconDownRed from 'assets/IconDownRed.svg'
import IconUpBlack from 'assets/IconUpBlack.svg'
import { DataContext } from 'components/App'
import { getWidth } from 'helper'
import React, { useContext } from 'react'

const AnnualHomePriceAppreciation = () => {
	const {
		annualPriceAppreciation: {
			level1Label,
			level1Value,
			level1Trend,
			level1Indicator,
			level2Label,
			level2Value,
			level2Trend,
			level2Indicator
		}
	} = useContext(DataContext)
	return (
		<div className="annual-home-price-container">
			<div className="section-title">Annual Home Price Appreciation</div>
			<div className="info-row">
				<div className="label">{level1Label}</div>
				<img
					className="indicator"
					src={
						level1Indicator === 'up'
							? IconUpBlack
							: level1Indicator === 'down'
							? IconDownRed
							: ''
					}
					alt="indicator"
				/>
				<div className="trend">{level1Trend}%</div>
				<div className="bar-row">
					<div className="bar" style={{ width: getWidth(level1Value) }} />
				</div>
			</div>
			<div className="info-row level2">
				<div className="label">{level2Label}</div>
				<img
					className="indicator"
					src={
						level2Indicator === 'up'
							? IconUpBlack
							: level2Indicator === 'down'
							? IconDownRed
							: ''
					}
					alt="indicator"
				/>
				<div className="trend">{level2Trend}%</div>
				<div className="bar-row">
					<div className="bar" style={{ width: getWidth(level2Value) }} />
				</div>
			</div>
		</div>
	)
}

export default AnnualHomePriceAppreciation
