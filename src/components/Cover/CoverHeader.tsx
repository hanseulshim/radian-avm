import React from 'react'
import RedBellLogo from 'assets/RedBellLogo.png'

const CoverHeader = () => {
	return (
		<div className="cover-header-container">
			<img className="logo" src={RedBellLogo} alt="Logo" />
			<div className="information">
				<div className="info-container">
					<span className="title">Pool Name</span>
					<span className="text">Test_11022015</span>
				</div>
				<div className="info-container">
					<span className="title">Loan #</span>
					<span className="text">2</span>
				</div>
				<div className="info-container">
					<span className="title">Order ID</span>
					<span className="text">6519041-6</span>
				</div>
			</div>
			<div className="publish-date">
				<div className="publish-date-row">
					<span className="title">Publish Date:</span>
					<span>November 11, 2019</span>
				</div>
				<div className="publish-date-row">
					<span className="title">Valuation Date:</span>
					<span>November 10, 2019</span>
				</div>
			</div>
		</div>
	)
}

export default CoverHeader
