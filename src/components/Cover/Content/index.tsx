import React from 'react'
import ColumnContent from './ColumnContent'
import './Content.scss'
import SubjectProperty from './SubjectProperty'
import ValueDefined from './ValueDefined'

const Content = () => (
	<div className="content-container">
		<SubjectProperty />
		<ColumnContent />
		<ValueDefined />
		<div>market sales</div>
	</div>
)

export default Content
