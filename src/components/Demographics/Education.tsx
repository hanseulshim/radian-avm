import { DataContext } from 'components/App'
import { getWidth } from 'helper'
import React, { useContext } from 'react'

const Education = () => {
	const { education } = useContext(DataContext)
	return (
		<>
			<div className="section-title">Education</div>
			<div className="education-row">
				<div className="label">High School</div>
				<div className="bar-row">
					<div
						className="bar"
						style={{ width: getWidth(education?.highSchool) }}
					>
						{education?.highSchool}%
					</div>
				</div>
			</div>
			<div className="education-row">
				<div className="label">College</div>
				<div className="bar-row">
					<div className="bar" style={{ width: getWidth(education?.college) }}>
						{education?.college}%
					</div>
				</div>
			</div>
			<div className="education-row">
				<div className="label">&ge; Master</div>
				<div className="bar-row">
					<div className="bar" style={{ width: getWidth(education?.grad) }}>
						{education?.grad}%
					</div>
				</div>
			</div>
		</>
	)
}

export default Education
