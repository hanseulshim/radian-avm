import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import { DataContext } from 'components/App'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { formatString } from 'helper'
import moment from 'moment'
import React, { useContext } from 'react'
import AdditionalPropertyListing from './AdditionalPropertyListing'

const AdditionalPropertyHistory2 = () => {
	const { subjectPropertyTransaction3 } = useContext(DataContext)
	const {
		listingStartDate,
		listingEndDate,
		heroImage,
		mlsName,
		mlsComments
	} = { ...subjectPropertyTransaction3 }
	const photos: string[] = subjectPropertyTransaction3?.photos
		? subjectPropertyTransaction3.photos
		: []
	return subjectPropertyTransaction3 !== null ? (
		<>
			<div className="additional-property-history page">
				<Header title="Subject Property History" />
				<div className="content-container">
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
					<div className="hero-image-container">
						<img
							src={heroImage ? heroImage : IconHouseUnavailable}
							alt="house"
						/>
					</div>
					{photos.slice(0, 9).map((photo, index) => (
						<div key={index} className="image-container">
							<img src={photo} alt="house" />
						</div>
					))}
				</div>
				<Footer />
			</div>
			{photos.length > 9 && (
				<AdditionalPropertyListing photos={photos.slice(9)} />
			)}
		</>
	) : null
}

export default AdditionalPropertyHistory2
