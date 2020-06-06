import IconHouseUnavailable from 'assets/IconHouseUnavailable.png'
import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext } from 'react'

const getClass = (type: string | null): string =>
	type ? type.toLowerCase() : ''

const MostRecentListings = () => {
	const { subjectPropertyTransactions } = useContext(DataContext)
	const sorted = subjectPropertyTransactions
		?.sort((a, b) => {
			if (
				a === null ||
				b === null ||
				a.listedDate === null ||
				b.listedDate === null ||
				a.listedDate < b.listedDate
			) {
				return 1
			} else if (b.listedDate > a.listedDate) return -1
			else return 0
		})
		.slice(0, 3)
		.reverse()
	return (
		<div className="most-recent-listings">
			<div className="section-title">Most Recent Listings</div>
			<div className="list-container">
				{sorted?.map(
					({ type, actionDate, actionAmount, imagePath }, index, arr) => {
						return (
							<div className="panel" key={index}>
								<div className="image-container house-image-container">
									<img
										src={imagePath ? imagePath : IconHouseUnavailable}
										alt="house"
									/>
									<div className={`status ${getClass(type)}`}>{type}</div>
									<div className={`circle ${getClass(type)}`}>
										{arr.length - index}
									</div>
								</div>
								<div className="info-row">
									<div>{actionDate}</div>
									<div className="value">
										{numeral(actionAmount).format('$0,')}
									</div>
								</div>
							</div>
						)
					}
				)}
			</div>
		</div>
	)
}

export default MostRecentListings
