import { DataContext } from 'components/App'
import React, { useContext } from 'react'
import './Cover.scss'
import CoverColumn1 from './CoverColumn1'
import CoverColumn2 from './CoverColumn2'
import CoverHeader from './CoverHeader'

const Cover = () => {
	const data = useContext(DataContext)

	return (
		<div className="cover-container page">
			<CoverHeader
				poolName={data?.poolName}
				loanNumber={data?.loanNumber}
				orderID={data?.orderID}
				valuationDate={data?.valuationDate}
			/>
			<div className="cover-sub-header">Radian AVM</div>
			<CoverColumn1 />
			<CoverColumn2 />
			<div className="footer">
				This report is not an appraisal of the market value of the subject
				property and is not intended to meet the Uniform Standards of
				Professional Appraisal Practice of the Appraisal Foundation.This
				information is based in whole or in part on data supplied by
				Metropolitan Regional Information Systems, Inc., , for the period
				05/12/2014 through 11/05/2015 . California RegionalMultiple Listing
				Service, Inc, Sandicor, does not guarantee nor is it in any way
				responsible for its accuracy. Data maintained by California Regional
				Multiple Listing Service, Inc, Sandicor,Inc may not reflect all real
				estate activity in the market. No representation or warranty is made as
				to the accuracy or completeness of the information contained herein. If
				an appraisal isdesired, the services of a licensed appraiser should be
				obtained.
			</div>
		</div>
	)
}

export default Cover
