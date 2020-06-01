import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

const AdditionalPropertyListing = ({ photos }: { photos: string[] }) => {
	return (
		<div className="additional-property-listing page">
			<Header title="Subject Property History" />
			<div className="property-listing">
				{photos.map((photo, index) => (
					<div key={index} className="image-container">
						<img src={photo} alt="house" />
					</div>
				))}
			</div>
			<Footer />
		</div>
	)
}

export default AdditionalPropertyListing
