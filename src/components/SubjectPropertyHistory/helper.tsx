import React from 'react'
import AdditionalPropertyListing from './AdditionalPropertyListing'

export const generateListings = (photos: string[]) => {
	const arr = []

	for (let i = 0; i < photos.length; i += 12) {
		arr.push(<AdditionalPropertyListing photos={photos.slice(i, i + 12)} />)
	}
	return arr
}
