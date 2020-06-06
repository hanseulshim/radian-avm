import { DataContext } from 'components/App'
import { formatString } from 'helper'
import React, { useContext } from 'react'

const AtAGlance = () => {
	const { propertyCharacteristics } = useContext(DataContext)
	const { atAGlance, sqFt, age, bedsBathGarage } = {
		...propertyCharacteristics
	}
	return (
		<div className="at-a-glance-container">
			<div className="title">At A Glance</div>
			<div>{atAGlance && formatString(atAGlance, 200)}</div>
			<div className="divider" />
			<div className="title">
				<sup>*</sup>SqFt
			</div>
			<div className="bar-row">
				<div>
					<div>Left Bar:</div>
					<div>{sqFt?.leftBar}</div>
				</div>
				<div>
					<div>Middle Bar:</div>
					<div>{sqFt?.middleBar}</div>
				</div>
				<div>
					<div>Right Bar:</div>
					<div>{sqFt?.rightBar}</div>
				</div>
			</div>
			<div className="title">
				<sup>*</sup>Age (yrs)
			</div>
			<div className="bar-row">
				<div>
					<div>Left Bar:</div>
					<div>{age?.leftBar}</div>
				</div>
				<div>
					<div>Middle Bar:</div>
					<div>{age?.middleBar}</div>
				</div>
				<div>
					<div>Right Bar:</div>
					<div>{age?.rightBar}</div>
				</div>
			</div>
			<div className="title">
				<sup>*</sup>Beds, Bath, Garage
			</div>
			<div>{bedsBathGarage}</div>
		</div>
	)
}

export default AtAGlance
