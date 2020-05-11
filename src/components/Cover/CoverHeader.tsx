import RedBellLogo from 'assets/RedBellLogo.png'
import { DataContext } from 'components/App'
import moment from 'moment'
import React, { useContext } from 'react'

const CoverHeader = () => {
	const data = useContext(DataContext)
	return (
		<div className="cover-header-container">
			<img className="logo" src={RedBellLogo} alt="Logo" />
			<div className="information">
				<div className="info-container">
					<span className="title">Pool Name</span>
					<span className="text">{data.poolName}</span>
				</div>
				<div className="info-container">
					<span className="title">Loan #</span>
					<span className="text">{data.loanNumber}</span>
				</div>
				<div className="info-container">
					<span className="title">Order ID</span>
					<span className="text">{data.orderID}</span>
				</div>
			</div>
			<div className="publish-date">
				<div className="publish-date-row">
					<span className="title">Publish Date:</span>
					<span>{moment().format('MMM DD, YYYY')}</span>
				</div>
				<div className="publish-date-row">
					<span className="title">Valuation Date:</span>
					<span>
						{moment(data.valuationDate, 'MM-DD-YYYY').format('MMM DD, YYYY')}
					</span>
				</div>
			</div>
		</div>
	)
}

export default CoverHeader
