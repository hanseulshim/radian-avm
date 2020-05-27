import { DataContext } from 'components/App'
import moment from 'moment'
import numeral from 'numeral'
import React, { useContext } from 'react'
import Legend from './Legend'

const getClass = (type: string | null): string =>
	type ? type.toLowerCase() : ''

const getWidth = (
	daysOnMarket: number | null,
	subjectPropertyTransactions: number[] | undefined
): number => {
	const num = daysOnMarket ? daysOnMarket : 0
	const numArr: number[] = subjectPropertyTransactions
		? subjectPropertyTransactions
		: []
	const maxNum = Math.max(...numArr)
	const max = maxNum > 0 ? maxNum * 1.05 : 1
	return (num / max) * 100
}

const PropertyValueTrend = () => {
	const { subjectPropertyTransactions } = useContext(DataContext)
	const generateRows = (
		{
			type,
			daysOnMarket,
			listedDate,
			listedAmount,
			listedSqFtPrice,
			action,
			actionDate,
			actionAmount,
			actionSqFtPrice,
			imagePath
		}: {
			type: string | null
			daysOnMarket: number | null
			listedDate: string | null
			listedAmount: number | null
			listedSqFtPrice: number | null
			action: string | null
			actionDate: string | null
			actionAmount: number | null
			actionSqFtPrice: number | null
			imagePath: string | null
		},
		index: number
	) => {
		return (
			<div
				className="row content"
				style={{
					borderTop: index !== 0 ? '1px solid #979797' : 0
				}}
				key={index}
			>
				<div className="column event">
					<div className={`circle ${getClass(type)}`}>{index + 1}</div>
				</div>
				<div className="column days-on-market">
					<div className="bar-container">
						<div
							className={`bar ${getClass(type)}`}
							style={{
								width:
									getWidth(
										daysOnMarket,
										subjectPropertyTransactions?.map((p) =>
											p.daysOnMarket ? p.daysOnMarket : 0
										)
									) + '%'
							}}
						/>
						<div
							className="value"
							style={{
								color:
									getClass(type) === 'distressed' ||
									getWidth(
										daysOnMarket,
										subjectPropertyTransactions?.map((p) =>
											p.daysOnMarket ? p.daysOnMarket : 0
										)
									) < 30
										? '#000'
										: ''
							}}
						>
							{daysOnMarket}
						</div>
					</div>
					<div className="info">
						<div>Listed</div>
						<div>{action ? action : 'N/A'}</div>
					</div>
				</div>
				<div className="column dates">
					<div>
						{listedDate
							? moment(listedDate, 'MM/DD/YYYY').format('M/D/YY')
							: 'N/A'}
					</div>
					<div>
						{actionDate
							? moment(actionDate, 'MM/DD/YYYY').format('M/D/YY')
							: 'N/A'}
					</div>
				</div>
				<div className="column amount">
					<div>
						{listedAmount ? numeral(listedAmount).format('$0,') : 'N/A'}
					</div>
					<div>
						{actionAmount ? numeral(actionAmount).format('$0,') : 'N/A'}
					</div>
				</div>
				<div className="column sqft">
					<div>
						{listedSqFtPrice ? numeral(listedSqFtPrice).format('$0.00') : 'N/A'}
					</div>
					<div>
						{actionSqFtPrice ? numeral(actionSqFtPrice).format('$0.00') : 'N/A'}
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className="property-value-trend">
			<Legend />
			<div className="chart-row">
				<div className="chart">chart</div>
				<div className="table">
					<div className="row header">
						<div className="column event header">Event</div>
						<div className="column days-on-market header">Days on Market</div>
						<div className="column dates header">Dates</div>
						<div className="column amount header">Amount</div>
						<div className="column sqft header">$ sqft</div>
					</div>
					{subjectPropertyTransactions?.slice(0, 6).map(generateRows)}
				</div>
			</div>
		</div>
	)
}

export default PropertyValueTrend
