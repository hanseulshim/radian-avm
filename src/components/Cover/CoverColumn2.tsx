import React from 'react'
import ArrowUp from 'assets/ArrowUp.svg'
import ArrowDown from 'assets/ArrowDown.svg'
import RadialTemp1 from 'assets/RadialTemp1.png'
import RadialTemp2 from 'assets/RadialTemp2.png'
import MarketStrengthTemp from 'assets/MarketStrengthTemp.png'
import PriceAppreciationTemp from 'assets/PriceAppreciationTemp.png'

const CoverColumn2 = () => {
	return (
		<div className="column2-container">
			<div className="sub-column-1">
				<div className="section-title">Retail</div>
				<div className="info-container">
					<div className="info-row">
						<img src={ArrowUp} alt="Arrow up" className="icon" />
						<span className="value-large">$1,437,977</span>
					</div>
					<div className="info-row">
						<img src={ArrowUp} alt="Arrow up" className="icon" />
						<span className="value">$228.25</span>
						<span className="label">per sqft</span>
					</div>
				</div>
				<div className="sub-section-title">Confidence Score</div>
				<div className="confidence-score-container">
					<div className="title-container">
						<span className="label">Much High</span>
						<span className="value">89</span>
					</div>
				</div>
				<div className="sub-section-title">
					Price Relative to
					<br />
					County & Zip
				</div>
				<img className="temp-icon" src={RadialTemp1} alt="Radial temp 1" />
				<div className="sub-section-title">Market Sales - Retail</div>
				<div className="bar-chart left">88%</div>
			</div>
			<div className="sub-column-2">
				<div className="section-title">Distressed</div>
				<div className="info-container">
					<div className="info-row">
						<img src={ArrowUp} alt="Arrow up" className="icon" />
						<span className="value-large">$1,262,629</span>
					</div>
					<div className="info-row">
						<img src={ArrowDown} alt="Arrow down" className="icon down" />
						<span className="value">$200.42</span>
						<span className="label">per sqft</span>
					</div>
				</div>
				<div className="sub-section-title">Confidence Score</div>
				<div className="confidence-score-container">
					<div className="title-container">
						<span className="label">Low</span>
						<span className="value">21</span>
					</div>
				</div>
				<div className="sub-section-title">
					Price Relative to
					<br />
					County & Zip
				</div>
				<img className="temp-icon" src={RadialTemp2} alt="Radial temp 2" />
				<div className="sub-section-title">Market Sales - Distressed</div>
				<div className="bar-chart right">12%</div>
			</div>
			<div className="bottom-section">
				<div className="section-title">Annual Home Price Appreciation</div>
				<div className="row">
					<img src={PriceAppreciationTemp} alt="price app" />
				</div>
			</div>
			<div className="bottom-section">
				<div className="section-title">Market Strength</div>
				<div className="row">
					<img src={MarketStrengthTemp} alt="price app" />
				</div>
			</div>
		</div>
	)
}

export default CoverColumn2
