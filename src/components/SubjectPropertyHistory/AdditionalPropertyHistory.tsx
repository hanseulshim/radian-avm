import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import { DataContext } from 'components/App'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { formatString } from 'helper'
import moment from 'moment'
import React, { useContext } from 'react'
import { generateListings } from './helper'

const AdditionalPropertyHistory = () => {
	const { subjectPropertyTransaction2 } = useContext(DataContext)
	const {
		listingStartDate,
		listingEndDate,
		heroImage,
		mlsName,
		mlsComments
	} = { ...subjectPropertyTransaction2 }
	const photos: string[] = subjectPropertyTransaction2?.photos
		? subjectPropertyTransaction2.photos
		: []
	return subjectPropertyTransaction2 !== null ? (
		<>
			<div className="additional-property-history page">
				<Header title="Subject Property History" />
				<div className="content-container">
					<div className="active-property">
						<div className="info-column">
							<div className="date">
								{moment(listingStartDate, 'MM/DD/YYYY').format('M/D/YYYY')} -{' '}
								{moment(listingEndDate, 'MM/DD/YYYY').format('M/D/YYYY')}
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
							<img
								src={heroImage ? heroImage : IconHouseUnavailable}
								alt="house"
							/>
						</div>
					</div>
					<div className="photo-container">
						{photos.slice(0, 9).map((photo, index) => (
							<div
								key={index}
								className="image-container house-image-container"
							>
								<img src={photo} alt="house" />
							</div>
						))}
					</div>
				</div>
				<Footer />
			</div>
			{generateListings(photos.slice(9))}
		</>
	) : null
}

export default AdditionalPropertyHistory
