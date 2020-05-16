import Header from 'components/Header'
import React from 'react'
import AtAGlance from './AtAGlance'
import PropertyCharacteristics from './PropertyCharacteristics'
import './SubjectPropertyDescriptionDetails.scss'

const SubjectPropertyDescriptionDetails = () => {
	return (
		<div className="subject-property-description-details">
			<Header title="Subject Property Description &amp; Details" />
			<div className="content-container">
				<div className="info-row">
					<PropertyCharacteristics />
					<AtAGlance />
				</div>
			</div>
		</div>
	)
}

export default SubjectPropertyDescriptionDetails
