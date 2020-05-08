import React from 'react'
import RedBellLogo from 'assets/RedBellLogo.png'

const CoverHeader = ({
	poolName,
	loanNumber,
	orderID,
	valuationDate
}: {
	poolName?: string
	loanNumber?: string
	orderID?: string
	valuationDate?: string
}) => {
	return (
		<div className="cover-header-container">
			<img className="logo" src={RedBellLogo} alt="Logo" />
			<div className="information">
				<div className="info-container">
					<span className="title">Pool Name</span>
					<span className="text">{poolName}</span>
				</div>
				<div className="info-container">
					<span className="title">Loan #</span>
					<span className="text">{loanNumber}</span>
				</div>
				<div className="info-container">
					<span className="title">Order ID</span>
					<span className="text">{orderID}</span>
				</div>
			</div>
			<div className="publish-date">
				<div className="publish-date-row">
					<span className="title">Publish Date:</span>
					<span>November 11, 2019</span>
				</div>
				<div className="publish-date-row">
					<span className="title">Valuation Date:</span>
					<span>{valuationDate}</span>
				</div>
			</div>
		</div>
	)
}

export default CoverHeader
