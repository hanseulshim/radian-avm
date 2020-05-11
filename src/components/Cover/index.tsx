import Footer from 'components/Footer'
import React from 'react'
import Content from './Content'
import './Cover.scss'
import CoverHeader from './CoverHeader'

const Cover = () => {
	return (
		<div className="cover-container page">
			<CoverHeader />
			<div className="cover-sub-header">Radian AVM</div>
			<Content />
			<Footer />
		</div>
	)
}

export default Cover
