import { DataContext } from 'components/App'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useContext } from 'react'
import ActiveProperty from './ActiveProperty'
import AdditionalPropertyListing from './AdditionalPropertyListing'
import MostRecentListings from './MostRecentListings'
import PropertyValueTrend from './PropertyValueTrend'
import './SubjectPropertyHistory.scss'

const SubjectPropertyHistory = () => {
	const { subjectPropertyTransaction1 } = useContext(DataContext)
	const photos: string[] = subjectPropertyTransaction1?.photos
		? subjectPropertyTransaction1.photos
		: []
	return (
		<>
			<div className="subject-property-history page">
				<Header title="Subject Property History" />
				<div className="content-container">
					<PropertyValueTrend />
				</div>
				<MostRecentListings />
				<ActiveProperty />
				<Footer />
			</div>
			{photos.length && <AdditionalPropertyListing photos={photos} />}
		</>
	)
}

export default SubjectPropertyHistory
