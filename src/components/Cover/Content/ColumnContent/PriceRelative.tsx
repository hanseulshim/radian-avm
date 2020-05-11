import React from 'react'

const PriceRelative = ({
	level1Label,
	level1Value,
	level2Label,
	level2Value
}: {
	level1Label: string | null
	level1Value: number | null
	level2Label: string | null
	level2Value: number | null
}) => {
	return (
		<div className="price-relative-container">
			<div className="sub-section-title">
				Price Relative to <br />
				{level1Label} &amp; {level2Label}
			</div>
			<div className="chart-container">
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
