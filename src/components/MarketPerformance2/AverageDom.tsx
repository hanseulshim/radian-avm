import IconMedians from 'assets/IconMedians'
import IconSold from 'assets/IconSold'
import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'

const AverageDom = () => {
	const { avgDom } = useContext(DataContext)

	useEffect(() => {
		const chart = am4core.create('averageDomChart', am4charts.XYChart)
		chart.data = avgDom as any

		const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.baseInterval = {
			timeUnit: 'year',
			count: 1,
		}

		dateAxis.renderer.minGridDistance = 10
		dateAxis.renderer.labels.template.truncate = true

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		valueAxis.width = 75
		valueAxis.strokeWidth = 0
		valueAxis.renderer.minGridDistance = 25
		valueAxis.renderer.labels.template.width = 100
		valueAxis.renderer.labels.template.maxWidth = 100
		valueAxis.renderer.labels.template.dx = -25
		valueAxis.renderer.labels.template.truncate = true
		valueAxis.renderer.labels.template.textAlign = 'end'
		dateAxis.renderer.labels.template.location = 0.0001

		valueAxis.renderer.labels.template.truncate = true

		const level1Series = chart.series.push(new am4charts.LineSeries())
		level1Series.dataFields.dateX = 'date'
		level1Series.dataFields.valueY = 'level1'
		level1Series.stroke = am4core.color(colors.neptune)
		level1Series.strokeWidth = 3

		const level2Series = chart.series.push(new am4charts.LineSeries())
		level2Series.dataFields.dateX = 'date'
		level2Series.dataFields.valueY = 'level2'
		level2Series.stroke = am4core.color(colors.azure)
		level2Series.strokeWidth = 3

		const level3Series = chart.series.push(new am4charts.LineSeries())
		level3Series.dataFields.dateX = 'date'
		level3Series.dataFields.valueY = 'level3'
		level3Series.stroke = am4core.color(colors.black)
		level3Series.strokeWidth = 3

		const soldSeries = chart.series.push(new am4charts.LineSeries())
		soldSeries.dataFields.dateX = 'date'
		soldSeries.dataFields.valueY = 'sold'
		soldSeries.stroke = am4core.color(colors.black)
		soldSeries.strokeWidth = 3
		soldSeries.strokeDasharray = '5,5'

		return () => {
			chart.dispose()
		}
	}, [avgDom])
	return (
		<>
			<div className="sub-section-title second">
				<div>Average DOM</div>
				<div className="legend-container">
					<div className="legend">
						<IconMedians />
						<div>Average listings</div>
					</div>
					<div className="legend">
						<IconSold />
						<div>Sold</div>
					</div>
				</div>
			</div>
			<div className="chart inventory" id="averageDomChart"></div>
		</>
	)
}

export default AverageDom
