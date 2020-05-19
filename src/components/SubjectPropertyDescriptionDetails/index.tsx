import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'
import AtAGlance from './AtAGlance'
import PropertyCharacteristics from './PropertyCharacteristics'
import PropertyFeatures from './PropertyFeatures'
import PropertyMap from './PropertyMap'
import './SubjectPropertyDescriptionDetails.scss'

const SubjectPropertyDescriptionDetails = () => {
	return (
		<div className="subject-property-description-details page">
			<Header title="Subject Property Description &amp; Details" />
			<div className="content-container">
				<div className="property-row">
					<PropertyCharacteristics />
					<AtAGlance />
				</div>
				<PropertyMap />
				<PropertyFeatures />
			</div>
			<Footer />
		</div>
	)
}

export default SubjectPropertyDescriptionDetails
