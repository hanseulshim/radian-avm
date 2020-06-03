import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'

const Transactions = () => {
	const { avgPrices, numberOfTransactions } = useContext(DataContext)
	const { rental, retailSales, distressedSales, flipSales, flipRental } = {
		...avgPrices
	}
	const { Retail, Distressed, flipSale }: any = {
		...numberOfTransactions
	}

	const rentalTransaction = numberOfTransactions?.rental
	const flipRentalTransaction = numberOfTransactions?.flipRental

	useEffect(() => {
		const chart = am4core.create('transactionsChart', am4charts.PieChart)
		chart.paddingLeft = 0
		chart.paddingRight = 0
		chart.paddingBottom = 0
		chart.paddingTop = 0

		chart.data = [
			{
				transactionType: 'Retail',
				value: Retail || null
			},
			{
				transactionType: 'Distressed',
				value: Distressed || null
			},
			{
				transactionType: 'Rental',
				value: rentalTransaction || null
			},
			{
				transactionType: 'Flip Sale',
				value: flipSale || null
			},
			{
				transactionType: 'Flip Rental',
				value: flipRentalTransaction || null
			}
		]

		chart.legend = new am4charts.Legend()
		chart.legend.position = 'right'
		chart.innerRadius = am4core.percent(60)
		chart.legend.valueLabels.template.disabled = true

		const pieSeries = chart.series.push(new am4charts.PieSeries())
		pieSeries.dataFields.value = 'value'
		pieSeries.dataFields.category = 'transactionType'
		pieSeries.labels.template.disabled = true
		pieSeries.colors.list = [
			am4core.color(colors.neptune),
			am4core.color(colors.azure),
			am4core.color(colors.slateGray),
			am4core.color(colors.wisteria),
			am4core.color(colors.mountainMist)
		]

		let sumLabel = chart.createChild(am4core.Label)
		const values = [
			Retail,
			Distressed,
			rentalTransaction,
			flipSale,
			flipRentalTransaction
		]
		const total = values.reduce((total, num) => {
			return total + num
		})
		sumLabel.isMeasured = false
		sumLabel.fontSize = 32
		sumLabel.fontWeight = '700'
		sumLabel.x = 125
		sumLabel.y = 125
		sumLabel.text = `${total}`
		let totalLabel = chart.createChild(am4core.Label)
		totalLabel.isMeasured = false
		totalLabel.fontSize = 16
		totalLabel.fontWeight = '700'
		totalLabel.x = 135
		totalLabel.y = 160
		totalLabel.text = `Total`
	}, [numberOfTransactions])
	return (
		<div className="transactions">
			<div className="section-title">Transactions, Last 6 Months (Zip)</div>
			<div className="row">
				<div className="column">
					<div className="chart-container" id="transactionsChart" />
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
