import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'

const PropertyValueTrendChart = () => {
	const { propertyValueTrend } = useContext(DataContext)
	const { averagePrice, medianPriceLevel1, medianPriceLevel2, hpi } = {
		...propertyValueTrend
	}

	useEffect(() => {
		const chart = am4core.create('propertyValueTrendChart', am4charts.XYChart)
		chart.paddingTop = 10
		chart.paddingLeft = 0
		chart.paddingBottom = 0

		const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.baseInterval = {
			timeUnit: 'year',
			count: 1
		}
		dateAxis.renderer.minGridDistance = 10
		dateAxis.startLocation = 0.5
		dateAxis.endLocation = 0.5
		dateAxis.renderer.labels.template.truncate = true

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		valueAxis.min = 0
		valueAxis.strokeWidth = 0
		valueAxis.renderer.minGridDistance = 50
		valueAxis.renderer.labels.template.dx = -10
		valueAxis.numberFormatter.numberFormat = '$#a'
		valueAxis.extraMax = 0.2

		const level1Series = chart.series.push(new am4charts.LineSeries())
		level1Series.data = medianPriceLevel1?.data as any
		level1Series.dataFields.dateX = 'date'
		level1Series.dataFields.valueY = 'value'
		level1Series.stroke = am4core.color(colors.markerRed)
		level1Series.strokeWidth = 3
		level1Series.strokeDasharray = '5,5'

		const level2Series = chart.series.push(new am4charts.LineSeries())
		level2Series.data = medianPriceLevel2?.data as any
		level2Series.dataFields.dateX = 'date'
		level2Series.dataFields.valueY = 'value'
		level2Series.stroke = am4core.color(colors.brandyPunch)
		level2Series.strokeWidth = 3
		level2Series.strokeDasharray = '5,5'

		const hpiSeries = chart.series.push(new am4charts.LineSeries())
		hpiSeries.data = hpi as any
		hpiSeries.dataFields.dateX = 'date'
		hpiSeries.dataFields.valueY = 'value'
		hpiSeries.stroke = am4core.color(colors.black)
		hpiSeries.strokeWidth = 3

		const retailVsDistressedSeries = chart.series.push(
			new am4charts.LineSeries()
		)
		retailVsDistressedSeries.data = averagePrice as any
		retailVsDistressedSeries.dataFields.dateX = 'date'
		retailVsDistressedSeries.dataFields.openValueY = 'Distressed'
		retailVsDistressedSeries.dataFields.valueY = 'Retail'
		retailVsDistressedSeries.sequencedInterpolation = true
		retailVsDistressedSeries.fill = am4core.color(colors.gray)
		retailVsDistressedSeries.fillOpacity = 0.1
		retailVsDistressedSeries.stroke = am4core.color(colors.gray)
		retailVsDistressedSeries.strokeOpacity = 0.1
	}, [propertyValueTrend])

	return <div className="chart" id="propertyValueTrendChart"></div>
}

export default PropertyValueTrendChart
