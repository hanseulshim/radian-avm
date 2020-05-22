import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'

const RetailDistressedSales = () => {
	const { retailVsDistressedSales, retailVsDistressedSalesData } = useContext(
		DataContext
	)

	useEffect(() => {
		const chart = am4core.create('retailVsDistressedChart', am4charts.XYChart)
		chart.data = retailVsDistressedSalesData as any
		console.log(chart.data)

		const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.startLocation = 0.5
		dateAxis.endLocation = 0.5
		dateAxis.renderer.minGridDistance = 10
		dateAxis.renderer.labels.template.truncate = true

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		// valueAxis.min = 0
		valueAxis.width = 75
		valueAxis.strokeWidth = 0
		valueAxis.renderer.minGridDistance = 50
		valueAxis.renderer.labels.template.width = 100
		valueAxis.renderer.labels.template.maxWidth = 100
		valueAxis.renderer.labels.template.dx = -25
		valueAxis.renderer.labels.template.truncate = true
		valueAxis.renderer.labels.template.textAlign = 'end'
		valueAxis.numberFormatter.numberFormat = '$#a'

		const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis())

		valueAxis2.renderer.opposite = true
		valueAxis2.renderer.minGridDistance = 50
		valueAxis2.min = 0
		valueAxis2.renderer.labels.template.adapter.add(
			'text',
			(text: string | undefined, label: any) => {
				return label.dataItem.value
			}
		)
		valueAxis2.syncWithAxis = valueAxis

		const level1Series = chart.series.push(new am4charts.LineSeries())
		level1Series.dataFields.valueY = 'level1'
		level1Series.dataFields.dateX = 'date'
		level1Series.yAxis = valueAxis2
		level1Series.stroke = am4core.color(colors.neptune)
		level1Series.strokeWidth = 3

		const level2Series = chart.series.push(new am4charts.LineSeries())
		level2Series.dataFields.valueY = 'level2'
		level2Series.dataFields.dateX = 'date'
		level2Series.yAxis = valueAxis2
		level2Series.stroke = am4core.color(colors.azure)
		level2Series.strokeWidth = 3

		const level3Series = chart.series.push(new am4charts.LineSeries())
		level3Series.dataFields.valueY = 'level3'
		level3Series.dataFields.dateX = 'date'
		level3Series.stroke = am4core.color(colors.black)
		level3Series.strokeWidth = 3
		level3Series.fill = am4core.color(colors.gray)
		level3Series.fillOpacity = 0.05

		// const comparable1Series = chart.series.push(new am4charts.LineSeries())
		// comparable1Series.data = inventory.comparable1
		// comparable1Series.config = config.line('comparable1')

		// const comparable2Series = chart.series.push(new am4charts.LineSeries())
		// comparable2Series.data = inventory.comparable2
		// comparable2Series.config = config.line('comparable2')

		// const selectedSoldSeries = chart.series.push(new am4charts.LineSeries())
		// selectedSoldSeries.data = inventory.selectedSold
		// selectedSoldSeries.config = config.line('selected', 'dash')

		// const comparable1SoldSeries = chart.series.push(new am4charts.LineSeries())
		// comparable1SoldSeries.data = inventory.comparable1Sold
		// comparable1SoldSeries.config = config.line('comparable1', 'dash')

		// const comparable2SoldSeries = chart.series.push(new am4charts.LineSeries())
		// comparable2SoldSeries.data = inventory.comparable2Sold
		// comparable2SoldSeries.config = config.line('comparable2', 'dash')

		return () => {
			chart.dispose()
		}
	}, [retailVsDistressedSalesData])
	return (
		<div className="retail-distressed-sales-container">
			<div className="section-title">Retail vs Distressed Sales</div>
			<div className="chart-row">
				<div className="info-container">
					<div className="table-container">
						<div className="row header">
							<div className="first" />
							<div className="marker" />
							<div className="column">Prior Month</div>
							<div className="column">1 Year Ago</div>
						</div>
						<div className="row">
							<div className="first">
								{retailVsDistressedSales?.level1Label}
							</div>
							<div className="marker level1"></div>
							<div className="column">
								{retailVsDistressedSales?.level1PriorMonth}
							</div>
							<div className="column">
								{retailVsDistressedSales?.level1PriorYear}
							</div>
						</div>
						<div className="row">
							<div className="first">
								{retailVsDistressedSales?.level2Label}
							</div>
							<div className="marker level2"></div>
							<div className="column">
								{retailVsDistressedSales?.level2PriorMonth}
							</div>
							<div className="column">
								{retailVsDistressedSales?.level2PriorYear}
							</div>
						</div>
						<div className="row">
							<div className="first">
								{retailVsDistressedSales?.level3Label}
							</div>
							<div className="marker level3"></div>
							<div className="column">
								$
								{numeral(retailVsDistressedSales?.level3PriorMonth).format(
									'0.[00]a'
								)}
							</div>
							<div className="column">
								$
								{numeral(retailVsDistressedSales?.level3PriorYear).format(
									'0.[00]a'
								)}
							</div>
						</div>
					</div>
					<div className="description">
						{retailVsDistressedSales?.description}
					</div>
				</div>
				<div className="chart-container">
					<div className="chart retail" id="retailVsDistressedChart" />
				</div>
			</div>
		</div>
	)
}

export default RetailDistressedSales
