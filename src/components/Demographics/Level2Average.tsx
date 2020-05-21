import IconArrowLeft from 'assets/IconArrowLeft'
import IconArrowRight from 'assets/IconArrowRight'
import IconCarSide from 'assets/IconCarSide'
import IconDown from 'assets/IconDown'
import IconGun from 'assets/IconGun'
import IconSchool from 'assets/IconSchool'
import IconUp from 'assets/IconUp'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const Level2Average = () => {
	const { level2Averages } = useContext(DataContext)
	const {
		label,
		avgSchoolRating,
		avgSchoolDelta,
		avgSchoolIndicator,
		avgTransitRating,
		avgTransitDelta,
		avgTransitIndicator,
		avgCrimeRating,
		avgCrimeDelta,
		avgCrimeIndicator
	} = { ...level2Averages }
	return (
		<div className="level-average-container level2">
			<div className="title">{label}</div>
			<div className="info-row">
				<div className="info-container">
					<IconSchool className="black" />
					<div className="info">
						<div className="line" />
						<div className="value-container">
							<div className="average">{avgSchoolRating}</div>
							<div className="icon-row">
								{avgSchoolIndicator === 'up' ? (
									<IconUp className="black indicator" />
								) : avgSchoolIndicator === 'down' ? (
									<IconDown className="black indicator" />
								) : null}{' '}
								{avgSchoolDelta}
							</div>
						</div>
					</div>
				</div>
				<div className="info-container">
					<IconCarSide className="black" />
					<div className="info">
						<div className="line" />
						<div className="value-container">
							<div className="average">{avgTransitRating}</div>
							<div className="icon-row">
								{avgTransitIndicator === 'up' ? (
									<IconUp className="black indicator" />
								) : avgTransitIndicator === 'down' ? (
									<IconDown className="black indicator" />
								) : null}{' '}
								{avgTransitDelta}
							</div>
						</div>
					</div>
				</div>
				<div className="info-container">
					<IconGun className="black" />
					<div className="info">
						<div className="line" />
						<div className="value-container">
							<div className="average">{avgCrimeRating}</div>
							<div className="icon-row">
								{avgCrimeIndicator === '<' ? (
									<IconArrowLeft className="black indicator-arrow" />
								) : avgCrimeIndicator === '>' ? (
									<IconArrowRight className="black indicator-arrow" />
								) : null}{' '}
								{avgCrimeDelta}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Level2Average
