import { DataContext } from 'components/App'
import Footer from 'components/Footer'
import Header from 'components/Header'
import React, { useContext } from 'react'
import ActiveProperty from './ActiveProperty'
import { generateListings } from './helper'
import MostRecentListings from './MostRecentListings'
import PropertyValueTrend from './PropertyValueTrend'
import './SubjectPropertyHistory.scss'

const SubjectPropertyHistory = () => {
	const {
		subjectPropertyTransaction1,
		subjectPropertyTransactions
	} = useContext(DataContext)
	const photos: string[] = subjectPropertyTransaction1?.photos
		? subjectPropertyTransaction1.photos
		: []
	return subjectPropertyTransactions &&
		subjectPropertyTransactions.length > 0 ? (
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
			{generateListings(photos)}
		</>
	) : null
}

export default SubjectPropertyHistory
