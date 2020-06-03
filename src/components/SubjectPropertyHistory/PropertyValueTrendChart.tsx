import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'
import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import { colors } from 'styles/colors'

interface event {
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
}

const PropertyValueTrendChart = () => {
	const { propertyValueTrend, subjectPropertyTransactions } = useContext(
		DataContext
	)
	const { averagePrice, medianPriceLevel1, medianPriceLevel2, hpi } = {
		...propertyValueTrend
	}

	let event1: event = {
			type: null,
			daysOnMarket: null,
			listedDate: null,
			listedAmount: null,
			listedSqFtPrice: null,
			action: null,
			actionDate: null,
			actionAmount: null,
			actionSqFtPrice: null,
			imagePath: null
		},
		event2: event = {
			type: null,
			daysOnMarket: null,
			listedDate: null,
			listedAmount: null,
			listedSqFtPrice: null,
			action: null,
			actionDate: null,
			actionAmount: null,
			actionSqFtPrice: null,
			imagePath: null
		},
		event3: event = {
			type: null,
			daysOnMarket: null,
			listedDate: null,
			listedAmount: null,
			listedSqFtPrice: null,
			action: null,
			actionDate: null,
			actionAmount: null,
			actionSqFtPrice: null,
			imagePath: null
		}

	if (subjectPropertyTransactions) {
		event1 = subjectPropertyTransactions[0]
		event2 = subjectPropertyTransactions[1]
		event3 = subjectPropertyTransactions[2]
	}

	useEffect(() => {
		const chart = am4core.create('propertyValueTrendChart', am4charts.XYChart)
		chart.paddingTop = 10
		chart.paddingLeft = 0
		chart.paddingBottom = 0
		chart.paddingRight = 50

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

		const event1Series = chart.series.push(new am4charts.ColumnSeries())
		event1Series.data = [{ ...event1 }]
		event1Series.dataFields.dateX = 'actionDate'
		event1Series.dataFields.valueY = 'actionAmount'
		event1Series.columns.template.width = 0
		event1Series.columns.template.strokeOpacity = 0
		const bullet = event1Series.bullets.push(new am4core.Circle())
		bullet.stroke = am4core.color(colors.black)
		bullet.fill = am4core.color(colors.black)
		bullet.strokeOpacity = 1
		bullet.fillOpacity = 1
		bullet.strokeWidth = 3
		bullet.width = 25
		bullet.height = 25
		const labelBullet = event1Series.bullets.push(new am4charts.LabelBullet())
		labelBullet.label.text = '1'
		labelBullet.label.stroke = am4core.color(colors.white)
		labelBullet.label.strokeOpacity = 10
		labelBullet.label.zIndex = 5

		const event2Series = chart.series.push(new am4charts.ColumnSeries())
		event2Series.data = [{ ...event2 }]
		event2Series.dataFields.dateX = 'actionDate'
		event2Series.dataFields.valueY = 'actionAmount'
		event2Series.columns.template.width = 0
		const bullet2 = event2Series.bullets.push(new am4core.Circle())
		bullet2.stroke = am4core.color(colors.neptune)
		bullet2.fill = am4core.color(colors.neptune)
		bullet2.strokeOpacity = 1
		bullet2.fillOpacity = 1
		bullet2.strokeWidth = 3
		bullet2.width = 25
		bullet2.height = 25
		const labelBullet2 = event2Series.bullets.push(new am4charts.LabelBullet())
		labelBullet2.label.text = '2'
		labelBullet2.label.stroke = am4core.color(colors.white)
		labelBullet2.label.strokeOpacity = 10
		labelBullet2.label.zIndex = 10

		const event3Series = chart.series.push(new am4charts.ColumnSeries())
		event3Series.data = [{ ...event3 }]
		event3Series.dataFields.dateX = 'actionDate'
		event3Series.dataFields.valueY = 'actionAmount'
		event3Series.columns.template.width = 0
		const bullet3 = event3Series.bullets.push(new am4core.Circle())
		bullet3.stroke = am4core.color(colors.black)
		bullet3.fill = am4core.color(colors.white)
		bullet3.strokeOpacity = 1
		bullet3.fillOpacity = 1
		bullet3.strokeWidth = 3
		bullet3.width = 25
		bullet3.height = 25
		const labelBullet3 = event3Series.bullets.push(new am4charts.LabelBullet())
		labelBullet3.label.text = '3'
		labelBullet3.label.stroke = am4core.color(colors.black)
		labelBullet3.label.strokeOpacity = 10
		labelBullet3.label.zIndex = 10
	}, [
		propertyValueTrend,
		subjectPropertyTransactions,
		averagePrice,
		event1,
		event2,
		event3,
		hpi,
		medianPriceLevel1,
		medianPriceLevel2
	])

	return <div className="chart" id="propertyValueTrendChart"></div>
}

export default PropertyValueTrendChart
