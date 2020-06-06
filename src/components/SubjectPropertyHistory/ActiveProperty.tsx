import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import { DataContext } from 'components/App'
import { formatString } from 'helper'
import moment from 'moment'
import React, { useContext } from 'react'

const ActiveProperty = () => {
	const { subjectPropertyTransaction1 } = useContext(DataContext)
	const {
		listingStartDate,
		listingEndDate,
		heroImage,
		mlsName,
		mlsComments
	} = { ...subjectPropertyTransaction1 }
	return (
		subjectPropertyTransaction1 && (
			<div className="active-property">
				<div className="info-column">
					<div className="date">
						{moment(listingStartDate, 'MM/DD/YYYY').format('M/D/YYYY')} -{' '}
						{moment(listingEndDate, 'MM/DD/YYYY').diff(moment()) >= 0
							? 'Active'
							: moment(listingEndDate, 'MM/DD/YYYY').format('M/D/YYYY')}
					</div>
					<div className="info">
						<div>
							<div className="title">MLS Name:</div>
							<div>{mlsName}</div>
						</div>
						<div>
							<div className="title comment">MLS Comments:</div>
							<div>{mlsComments && formatString(mlsComments, 750)}</div>
						</div>
					</div>
				</div>
				<div className="image-container house-image-container">
					<img src={heroImage ? heroImage : IconHouseUnavailable} alt="house" />
				</div>
			</div>
		)
	)
}

export default ActiveProperty
