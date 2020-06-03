import IconDown from 'assets/IconDown'
import IconUp from 'assets/IconUp'
import numeral from 'numeral'
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
			{price ? (
				<>
					{indicator === 'up' ? (
						<IconUp className="black indicator" />
					) : indicator === 'down' ? (
						<IconDown className="indicator red" />
					) : (
						<div className="indicator">&nbsp;</div>
					)}
					<span className="price">{numeral(price).format('$0,')}</span>
				</>
			) : (
				<div className="price">&nbsp;</div>
			)}
		</div>
		<div className="price-row">
			{pricePerSqft ? (
				<>
					{pricePerSqftIndicator === 'up' ? (
						<IconUp className="black indicator" />
					) : pricePerSqftIndicator === 'down' ? (
						<IconDown className="indicator red" />
					) : (
						<div className="indicator">&nbsp;</div>
					)}
					<span className="price-per-sqft">
						{numeral(pricePerSqft).format('$0,0.00')}
					</span>
					<span className="price-per-sqft-label">per sqft</span>
				</>
			) : (
				<div className="price-per-sqft">&nbsp;</div>
			)}
		</div>
	</>
)

export default PriceIndicator
