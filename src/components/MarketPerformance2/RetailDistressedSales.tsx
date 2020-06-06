import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'
import { DataContext } from 'components/App'
import { formatString } from 'helper'
import numeral from 'numeral'
import React, { useContext, useEffect } from 'react'
import { colors } from 'styles/colors'

const RetailDistressedSales = () => {
	const { retailVsDistressedSales, retailVsDistressedSalesData } = useContext(
		DataContext
	)

	useEffect(() => {
		const chart = am4core.create('retailVsDistressedChart', am4charts.XYChart)
		chart.data = retailVsDistressedSalesData as any

		const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.startLocation = 0.5
		dateAxis.endLocation = 0.5
		dateAxis.renderer.minGridDistance = 10
		dateAxis.renderer.labels.template.truncate = true

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())

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

		return () => {
			chart.dispose()
		}
	}, [retailVsDistressedSalesData])
	return (
		<div className="retail-distressed-sales-container">
			<div className="section-title">Retail vs Distressed Sales</div>
			<div className="chart-row">
				<div className="info-container">
					{retailVsDistressedSales && (
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
								{retailVsDistressedSales?.level1PriorMonth ? (
									<div className="column">
										{retailVsDistressedSales?.level1PriorMonth}
									</div>
								) : (
									<div className="column">&nbsp;</div>
								)}
								{retailVsDistressedSales?.level1PriorYear ? (
									<div className="column">
										{retailVsDistressedSales?.level1PriorYear}
									</div>
								) : (
									<div className="column">&nbsp;</div>
								)}
							</div>
							<div className="row">
								<div className="first">
									{retailVsDistressedSales?.level2Label}
								</div>
								<div className="marker level2"></div>
								{retailVsDistressedSales?.level2PriorMonth ? (
									<div className="column">
										${retailVsDistressedSales?.level2PriorMonth}
									</div>
								) : (
									<div className="column">&nbsp;</div>
								)}
								{retailVsDistressedSales?.level2PriorYear ? (
									<div className="column">
										{retailVsDistressedSales?.level2PriorYear}
									</div>
								) : (
									<div className="column">&nbsp;</div>
								)}
							</div>
							<div className="row">
								<div className="first">
									{retailVsDistressedSales?.level3Label}
								</div>
								<div className="marker level3"></div>
								{retailVsDistressedSales?.level3PriorMonth ? (
									<div className="column">
										$
										{numeral(retailVsDistressedSales?.level3PriorMonth).format(
											'0.[00]a'
										)}
									</div>
								) : (
									<div className="column">&nbsp;</div>
								)}
								{retailVsDistressedSales?.level3PriorYear ? (
									<div className="column">
										$
										{numeral(retailVsDistressedSales?.level3PriorYear).format(
											'0.[00]a'
										)}
									</div>
								) : (
									<div className="column">&nbsp;</div>
								)}
							</div>
						</div>
					)}
					<div className="description">
						{retailVsDistressedSales?.description &&
							formatString(retailVsDistressedSales?.description, 200)}
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
