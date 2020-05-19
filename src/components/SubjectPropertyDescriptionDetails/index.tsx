import Header from 'components/Header'
import React from 'react'
import AtAGlance from './AtAGlance'
import PropertyCharacteristics from './PropertyCharacteristics'
import PropertyMap from './PropertyMap'
import './SubjectPropertyDescriptionDetails.scss'

const SubjectPropertyDescriptionDetails = () => {
	return (
		<div className="subject-property-description-details">
			<Header title="Subject Property Description &amp; Details" />
			<div className="content-container">
				<div className="property-row">
					<PropertyCharacteristics />
					<AtAGlance />
				</div>
				<PropertyMap />
			</div>
		</div>
	)
}

export default SubjectPropertyDescriptionDetails
