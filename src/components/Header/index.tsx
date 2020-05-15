import RedBellLogo from 'assets/RedBellLogo.png'
import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import './Header.scss'

const Header = ({ title }: { title: string }) => {
	const { poolName, loanNumber, orderId, subjectProperty } = useContext(
		DataContext
	)
	const { propertyAddress, propertyCity, propertyState, propertyZip } = {
		...subjectProperty
	}
	return (
		<div className="header-container">
			<div className="top-row">
				<div className="logo-container">
					<img className="logo" src={RedBellLogo} alt="Logo" />
				</div>
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
						<span className="text">{orderId}</span>
					</div>
				</div>
			</div>
			<div className="color-strip" />
			<div className="title-row">
				<div className="title">{title}</div>
				<div className="address-container">
					<div>{propertyAddress}</div>
					<div>
						{propertyCity}, {propertyState} {propertyZip}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
