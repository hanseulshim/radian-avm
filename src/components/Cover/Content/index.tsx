import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import './Content.scss'
import SubjectProperty from './SubjectProperty'

const Content = () => {
	const data = useContext(DataContext)
	return (
		<div className="content-container">
			<SubjectProperty subjectProperty={data.subjectProperty} />
			<div>1</div>
			<div>2</div>
		</div>
	)
}

export default Content
