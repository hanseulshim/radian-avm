import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import PropertyValueTrend from './PropertyValueTrend'
import './SubjectPropertyHistory.scss'

const SubjectPropertyHistory = () => {
	return (
		<div className="subject-property-history page">
			<Header title="Subject Property History" />
			<div className="content-container">
				<PropertyValueTrend />
			</div>
			<Footer />
		</div>
	)
}

export default SubjectPropertyHistory
