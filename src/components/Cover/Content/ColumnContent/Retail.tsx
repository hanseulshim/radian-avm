import React from 'react'
import ConfidenceScore from './ConfidenceScore'
import PriceIndicator from './PriceIndicator'
import PriceRelative from './PriceRelative'

const Retail = ({
	retail: {
		price,
		indicator,
		pricePerSqft,
		pricePerSqftIndicator,
		confidenceScore,
		level1Label,
		level1Value,
		level2Label,
		level2Value
	}
}: {
	retail: {
		price: number | null
		indicator: string | null
		pricePerSqft: number | null
		pricePerSqftIndicator: string | null
		confidenceScore: number | null
		level1Label: string | null
		level1Value: number | null
		level2Label: string | null
		level2Value: number | null
	}
}) => {
	return (
		<>
			<div className="column-container retail">
				<div className="section-title">Retail</div>
				<PriceIndicator
					price={price}
					indicator={indicator}
					pricePerSqft={pricePerSqft}
					pricePerSqftIndicator={pricePerSqftIndicator}
				/>
				<ConfidenceScore confidenceScore={confidenceScore} retail />
				<PriceRelative
					level1Label={level1Label}
					level1Value={level1Value}
					level2Label={level2Label}
					level2Value={level2Value}
				/>
			</div>
			<div>Market Sales</div>
		</>
	)
}

export default Retail
