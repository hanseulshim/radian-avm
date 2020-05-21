import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const FamilyMakeup = () => {
	const { familyMakeupDescription, familyMakeup, level1Averages } = useContext(
		DataContext
	)
	const getFamilyInfo = (
		familyMakeup: Array<{
			value: number | null
			category: string | null
		}> | null
	) => {
		const returnObj = {
			percent: '',
			geography: '',
			makeup: ''
		}
		if (!familyMakeup) return returnObj

		const largestMakeup = familyMakeup.sort((a, b) => {
			if (a.value === null || b.value === null) return -1
			return b.value - a.value
		})[0]
		console.log(largestMakeup)
		if (largestMakeup.value) returnObj.percent = largestMakeup.value.toString()
		if (largestMakeup.category) returnObj.makeup = largestMakeup.category
		if (level1Averages?.label) returnObj.geography = level1Averages.label
		return returnObj
	}
	const info = getFamilyInfo(familyMakeup)
	return (
		<>
			<div className="section-title">Family Makeup</div>
			<div className="chart-container">Chart</div>
			<div className="description">
				{familyMakeupDescription
					?.replace('{PERCENT}', info.percent)
					.replace('{GEOGRAPHY}', info.geography)
					.replace('{FAMILY_MAKEUP}', info.makeup)}
			</div>
		</>
	)
}

export default FamilyMakeup
