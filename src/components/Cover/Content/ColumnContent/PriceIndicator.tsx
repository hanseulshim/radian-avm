import IconDownRed from 'assets/IconDownRed.svg'
import IconUpBlack from 'assets/IconUpBlack.svg'
import React from 'react'

const PriceIndicator = ({
	price,
	indicator,
	pricePerSqft,
	pricePerSqftIndicator
}: {
	price: number | null
	indicator: string | null
	pricePerSqft: number | null
	pricePerSqftIndicator: string | null
}) => {
	return (
		<>
			<div className="price-row">
				<img
					className="indicator"
					src={
						indicator === 'up'
							? IconUpBlack
							: indicator === 'down'
							? IconDownRed
							: ''
					}
					alt="indicator"
				/>
				<span className="price">${price?.toLocaleString()}</span>
			</div>
			<div className="price-row">
				<img
					className="indicator"
					src={
						pricePerSqftIndicator === 'up'
							? IconUpBlack
							: pricePerSqftIndicator === 'down'
							? IconDownRed
							: ''
					}
					alt="price per sq ft indicator"
				/>
				<span className="price-per-sqft">
					$
					{pricePerSqft?.toLocaleString(undefined, {
						minimumFractionDigits: 2,
						maximumFractionDigits: 2
					})}
				</span>
				<span className="price-per-sqft-label">per sqft</span>
			</div>
		</>
	)
}

export default PriceIndicator
