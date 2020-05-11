import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import './Footer.scss'

const Footer = () => {
	const data = useContext(DataContext)
	return <div className="footer-container">{data.footer}</div>
}

export default Footer
