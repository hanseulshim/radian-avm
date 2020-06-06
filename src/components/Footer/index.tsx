import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import './Footer.scss'

const Footer = () => {
	const data = useContext(DataContext)
	return (
		<div className="footer-container">
			{data.footer && data.footer.length > 800
				? `${data.footer?.substring(0, 800)}...`
				: data.footer}
		</div>
	)
}

export default Footer
