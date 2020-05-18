import IconDown from 'assets/IconDown'
import IconUp from 'assets/IconUp'
import React from 'react'

const PriceIndicator = ({
	price,
	indicator,
	pricePerSqft,
	pricePerSqftIndicator
}: {
	price?: number | null
	indicator?: string | null
	pricePerSqft?: number | null
	pricePerSqftIndicator?: string | null
}) => (
	<>
		<div className="price-row">
			{indicator === 'up' ? (
				<IconUp className="black indicator" />
			) : indicator === 'down' ? (
				<IconDown className="indicator red" />
			) : null}
			{price && <span className="price">${price?.toLocaleString()}</span>}
		</div>
		<div className="price-row">
			{pricePerSqftIndicator === 'up' ? (
				<IconUp className="black indicator" />
			) : pricePerSqftIndicator === 'down' ? (
				<IconDown className="indicator red" />
			) : null}
			{pricePerSqft && (
				<>
					<span className="price-per-sqft">
						$
						{pricePerSqft?.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
					</span>
					<span className="price-per-sqft-label">per sqft</span>
				</>
			)}
		</div>
	</>
)

export default PriceIndicator
