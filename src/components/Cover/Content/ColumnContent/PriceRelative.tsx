import React from 'react'

const PriceRelative = ({
	retail,
	level1Label,
	level1Value,
	level2Label,
	level2Value
}: {
	retail?: boolean
	level1Label?: string | null
	level1Value?: number | null
	level2Label?: string | null
	level2Value?: number | null
}) => {
	return (
		<div className="price-relative-container">
			<div className="sub-section-title">
				Price Relative to <br />
				{level1Label} &amp; {level2Label}
			</div>
			<div className={`chart-container ${retail && 'retail'}`}>
				<div className="legend-container">
					<div className="legend level1">
						<div className="marker level1" />
						<div className="label">{level1Label}</div>
					</div>
					<div className="legend">
						<div className="marker" />
						<div className="label">{level2Label}</div>
					</div>
				</div>
				<div>
					{level1Label}: {level1Value}
				</div>
				<div>
					{level2Label}: {level2Value}
				</div>
			</div>
		</div>
	)
}

export default PriceRelative
