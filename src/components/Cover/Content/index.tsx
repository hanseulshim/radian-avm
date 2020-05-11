import React from 'react'
import ColumnContent from './ColumnContent'
import './Content.scss'
import SubjectProperty from './SubjectProperty'

const Content = () => (
	<div className="content-container">
		<SubjectProperty />
		<ColumnContent />
	</div>
)

export default Content
