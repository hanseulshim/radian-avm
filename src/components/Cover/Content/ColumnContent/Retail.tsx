import React from 'react'
import ConfidenceScore from './ConfidenceScore'
import PriceIndicator from './PriceIndicator'
import PriceRelative from './PriceRelative'

const Retail = ({
	retail
}: {
	retail?: {
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
	} = { ...retail }
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
					retail
					level1Label={level1Label}
					level1Value={level1Value}
					level2Label={level2Label}
					level2Value={level2Value}
				/>
			</div>
		</>
	)
}

export default Retail
