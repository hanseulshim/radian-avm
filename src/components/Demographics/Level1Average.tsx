import IconArrowLeft from 'assets/IconArrowLeft'
import IconArrowRight from 'assets/IconArrowRight'
import IconCarSide from 'assets/IconCarSide'
import IconDown from 'assets/IconDown'
import IconGun from 'assets/IconGun'
import IconSchool from 'assets/IconSchool'
import IconUp from 'assets/IconUp'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'

const Level1Average = () => {
	const { level1Averages } = useContext(DataContext)
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
	} = { ...level1Averages }
	return (
		level1Averages && (
			<div className="level-average-container level1">
				<div className="title">{label}</div>
				<div className="info-row">
					<div className="info-container">
						<IconSchool />
						<div className="info">
							<div className="line" />
							<div className="value-container">
								<div className="average">{avgSchoolRating}</div>
								<div className="icon-row">
									{avgSchoolIndicator === 'up' ? (
										<IconUp className="white indicator" />
									) : avgSchoolIndicator === 'down' ? (
										<IconDown className="white indicator" />
									) : null}{' '}
									{avgSchoolDelta}
								</div>
							</div>
						</div>
					</div>
					<div className="info-container">
						<IconCarSide />
						<div className="info">
							<div className="line" />
							<div className="value-container">
								<div className="average">{avgTransitRating}</div>
								<div className="icon-row">
									{avgTransitIndicator === 'up' ? (
										<IconUp className="white indicator" />
									) : avgTransitIndicator === 'down' ? (
										<IconDown className="white indicator" />
									) : null}{' '}
									{avgTransitDelta}
								</div>
							</div>
						</div>
					</div>
					<div className="info-container">
						<IconGun />
						<div className="info">
							<div className="line" />
							<div className="value-container">
								<div className="average">{avgCrimeRating}</div>
								<div className="icon-row">
									{avgCrimeIndicator === '<' ? (
										<IconArrowLeft className="white indicator-arrow" />
									) : avgCrimeIndicator === '>' ? (
										<IconArrowRight className="white indicator-arrow" />
									) : null}{' '}
									{avgCrimeDelta}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default Level1Average
