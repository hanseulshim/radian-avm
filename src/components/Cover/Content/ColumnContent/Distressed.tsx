import React from 'react'
import ConfidenceScore from './ConfidenceScore'
import PriceIndicator from './PriceIndicator'
import PriceRelative from './PriceRelative'

const Distressed = ({
	distressed
}: {
	distressed?: {
		price?: number
		indicator?: string
		pricePerSqft?: number
		pricePerSqftIndicator?: string
		confidenceScore?: number
		level1Label?: string
		level1Value?: number
		level2Label?: string
		level2Value?: number
	}
}) => {
	const {
		price,
		indicator,
		pricePerSqft,
		pricePerSqftIndicator,
		confidenceScore,
		level1Label,
		level1Value,
		level2Label,
		level2Value
	} = { ...distressed }
	return (
		<div className="column-container distressed">
			<div className="section-title">Distressed</div>
			<PriceIndicator
				price={price}
				indicator={indicator}
				pricePerSqft={pricePerSqft}
				pricePerSqftIndicator={pricePerSqftIndicator}
			/>
			<ConfidenceScore confidenceScore={confidenceScore} />
			<PriceRelative
				level1Label={level1Label}
				level1Value={level1Value}
				level2Label={level2Label}
				level2Value={level2Value}
			/>
		</div>
	)
}

export default Distressed
