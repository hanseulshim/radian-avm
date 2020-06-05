import IconBike from 'assets/IconBike'
import IconCar from 'assets/IconCar'
import IconTrain from 'assets/IconTrain'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const getColor = (value?: number | null): string =>
	value ? (value <= 3 ? '#FFF' : '#000') : ''

const getBackground = (value?: number | null): string => {
	if (!value) return ''
	if (value <= 1) {
		return '#BA131A'
	} else if (value <= 2) {
		return '#C6401E'
	} else if (value <= 3) {
		return '#CB5724'
	} else if (value <= 4) {
		return '#D27C30'
	} else if (value <= 5) {
		return '#C59C44'
	} else if (value <= 6) {
		return '#CBB356'
	} else if (value <= 7) {
		return '#CDBD6C'
	} else if (value <= 8) {
		return '#C9CE94'
	} else if (value <= 9) {
		return '#CDDDAB'
	} else {
		return '#D5E8C1'
	}
}

const MarketAverages = () => {
	const { marketAverages, level1Averages } = useContext(DataContext)
	const { description, schoolRatings, transitScores } = { ...marketAverages }
	return (
		<>
			<div className="section-title">Market Averages</div>
			{schoolRatings && (
				<div className="ratings-container">
					<div className="title">School Ratings</div>
					<div className="rating">
						{level1Averages?.avgSchoolRating && (
							<div
								className="average"
								style={{
									background: getBackground(level1Averages?.avgSchoolRating),
									color: getColor(level1Averages?.avgSchoolRating)
								}}
							>
								<div className="value">{level1Averages?.avgSchoolRating}</div>
								<div>Avg</div>
							</div>
						)}
						<div className="value-container">
							<div className="value-row">
								<div
									className="value"
									style={{
										background: getBackground(schoolRatings?.elementary),
										color: getColor(schoolRatings?.elementary)
									}}
								>
									{schoolRatings?.elementary}
								</div>
								{schoolRatings?.elementary && <div>Elementary</div>}
							</div>
							<div className="value-row">
								<div
									className="value"
									style={{
										background: getBackground(schoolRatings?.middle),
										color: getColor(schoolRatings?.middle)
									}}
								>
									{schoolRatings?.middle}
								</div>
								{schoolRatings?.middle && <div>Middle</div>}
							</div>
							<div className="value-row">
								<div
									className="value"
									style={{
										background: getBackground(schoolRatings?.high),
										color: getColor(schoolRatings?.high)
									}}
								>
									{schoolRatings?.high}
								</div>
								{schoolRatings?.high && <div>High</div>}
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="description">
				{description?.replace(
					'{GEOGRAPHY}',
					level1Averages?.label ? level1Averages.label : ''
				)}
			</div>
			{transitScores && (
				<div className="ratings-container">
					<div className="title">Transit Scores</div>
					<div className="rating">
						{level1Averages?.avgTransitRating && (
							<div
								className="average"
								style={{
									background: getBackground(level1Averages?.avgTransitRating),
									color: getColor(level1Averages?.avgTransitRating)
								}}
							>
								<div className="value">{level1Averages?.avgTransitRating}</div>
								<div>Avg</div>
							</div>
						)}
						<div className="value-container">
							<div className="value-row">
								<div
									className="value"
									style={{
										background: getBackground(transitScores?.massTransit),
										color: getColor(transitScores?.massTransit)
									}}
								>
									{transitScores?.massTransit}
								</div>
								{transitScores?.massTransit && <IconTrain className="black" />}
							</div>
							<div className="value-row">
								<div
									className="value"
									style={{
										background: getBackground(transitScores?.auto),
										color: getColor(transitScores?.auto)
									}}
								>
									{transitScores?.auto}
								</div>
								{transitScores?.auto && <IconCar className="black" />}
							</div>
							<div className="value-row">
								<div
									className="value"
									style={{
										background: getBackground(transitScores?.bike),
										color: getColor(transitScores?.bike)
									}}
								>
									{transitScores?.bike}
								</div>
								{transitScores?.bike && <IconBike className="black" />}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default MarketAverages
