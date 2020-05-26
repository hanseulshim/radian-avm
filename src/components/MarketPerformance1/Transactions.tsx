import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext } from 'react'

const Transactions = () => {
	const { avgPrices } = useContext(DataContext)
	const { rental, retailSales, distressedSales, flipSales, flipRental } = {
		...avgPrices
	}
	return (
		<div className="transactions">
			<div className="section-title">Transactions, Last 6 Months (Zip)</div>
			<div className="row">
				<div className="column">
					<div className="chart-container">chart</div>
					<div className="panel">
						<div className="title rental">Rentals</div>
						<div className="info-row">
							<div className="col-1">
								<div className="value">
									{numeral(rental?.avgRent).format('$0,')}
								</div>
								<div className="label">Avg. Rent</div>
							</div>
							<div className="col-2">
								<div className="value">{rental?.avgDom}</div>
								<div className="label">Avg. DOM</div>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-container">
					<div className="panel">
						<div className="title retail">Retail Sales</div>
						<div className="info-row">
							<div className="col-1">
								<div className="value">
									{numeral(retailSales?.medianSalePrice).format('$0,')}
								</div>
								<div className="label">Median Sales Price</div>
							</div>
							<div className="col-2">
								<div className="value">{retailSales?.avgDom}</div>
								<div className="label">Avg. DOM</div>
							</div>
						</div>
					</div>
					<div className="panel">
						<div className="title distressed">Distressed Sales</div>
						<div className="info-row">
							<div className="col-1">
								<div className="value">
									{numeral(distressedSales?.medianSalePrice).format('$0,')}
								</div>
								<div className="label">Median Sales Price</div>
							</div>
							<div className="col-2">
								<div className="value">
									{distressedSales?.distressedDiscount}%
								</div>
								<div className="label">Distressed Discount</div>
							</div>
						</div>
					</div>
					<div className="panel">
						<div className="title flip-sale">Flip Sales</div>
						<div className="info-row">
							<div className="col-1">
								<div className="value">
									<span>{numeral(flipSales?.saleRange1).format('$0,')}-</span>
									<span>{numeral(flipSales?.saleRange2).format('$0,')}</span>
								</div>
								<div className="label" style={{ marginTop: 10 }}>
									Sale
									<br />
									Range
								</div>
							</div>
							<div className="col-2">
								<div className="value">
									<span>
										{numeral(flipSales?.grossProfitRange1).format('$0,')}-
									</span>
									<span>
										{numeral(flipSales?.grossProfitRange2).format('$0,')}
									</span>
								</div>
								<div className="label" style={{ marginTop: 10 }}>
									Gross Profit Range
								</div>
							</div>
						</div>
					</div>
					<div className="panel">
						<div className="title flip-rental">Flip Rental</div>
						<div className="info-row">
							<div className="col-1">
								<div className="value">
									{numeral(flipRental?.avgRent).format('$0,')}
								</div>
								<div className="label" style={{ marginTop: 40 }}>
									Avg. Rent
								</div>
							</div>
							<div className="col-2">
								<div className="value">
									<span>{numeral(flipRental?.rentRange1).format('$0,')}-</span>
									<span>{numeral(flipRental?.rentRange2).format('$0,')}</span>
								</div>
								<div className="label" style={{ marginTop: 10 }}>
									Rent Range
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Transactions
