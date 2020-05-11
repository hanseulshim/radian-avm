import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import './ColumnContent.scss'
import Distressed from './Distressed'
import Retail from './Retail'

const ColumnContent = () => {
	const { retail, distressed } = useContext(DataContext)
	return (
		<div className="column-content-container">
			<Retail retail={retail} />
			<Distressed distressed={distressed} />
		</div>
	)
}

export default ColumnContent
