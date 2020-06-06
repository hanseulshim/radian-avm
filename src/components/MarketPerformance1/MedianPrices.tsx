import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'
import IconLine from 'assets/IconLine'
import IconListed from 'assets/IconListed'
import { DataContext } from 'components/App'
import { formatString } from 'helper'
import React, { useContext, useEffect } from 'react'
import { colors } from 'styles/colors'

const MedianPrices = () => {
	const { medianPrices } = useContext(DataContext)
	const {
		atAGlance,
		level1Label,
		level1Sold,
		level1Listed,
		level2Label,
		level2Sold,
		level2Listed
	} = { ...medianPrices }

	useEffect(() => {
		const chart = am4core.create('medianPriceChart', am4charts.XYChart)
		chart.paddingTop = 10
		chart.paddingLeft = 0
		chart.paddingBottom = 0
		chart.data = medianPrices as any

		const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.baseInterval = {
			timeUnit: 'year',
			count: 1
		}
		dateAxis.renderer.minGridDistance = 10
		dateAxis.renderer.labels.template.truncate = true

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		valueAxis.min = 0
		valueAxis.strokeWidth = 0
		valueAxis.renderer.minGridDistance = 50
		valueAxis.renderer.labels.template.dx = -10
		valueAxis.numberFormatter.numberFormat = '$#a'
		valueAxis.extraMax = 0.2

		const level1SoldSeries = chart.series.push(new am4charts.LineSeries())
		level1SoldSeries.data = level1Sold as any
		level1SoldSeries.dataFields.dateX = 'date'
		level1SoldSeries.dataFields.valueY = 'value'
		level1SoldSeries.stroke = am4core.color(colors.neptune)
		level1SoldSeries.strokeWidth = 3

		const level1ListedSeries = chart.series.push(new am4charts.LineSeries())
		level1ListedSeries.data = level1Listed as any
		level1ListedSeries.dataFields.dateX = 'date'
		level1ListedSeries.dataFields.valueY = 'value'
		level1ListedSeries.stroke = am4core.color(colors.neptune)
		level1ListedSeries.strokeWidth = 3
		level1ListedSeries.strokeDasharray = '5,5'

		const level2SoldSeries = chart.series.push(new am4charts.LineSeries())
		level2SoldSeries.data = level2Sold as any
		level2SoldSeries.dataFields.dateX = 'date'
		level2SoldSeries.dataFields.valueY = 'value'
		level2SoldSeries.stroke = am4core.color(colors.azure)
		level2SoldSeries.strokeWidth = 3

		const level2ListedSeries = chart.series.push(new am4charts.LineSeries())
		level2ListedSeries.data = level2Listed as any
		level2ListedSeries.dataFields.dateX = 'date'
		level2ListedSeries.dataFields.valueY = 'value'
		level2ListedSeries.stroke = am4core.color(colors.azure)
		level2ListedSeries.strokeWidth = 3
		level2ListedSeries.strokeDasharray = '5,5'

		return () => {
			chart.dispose()
		}
	}, [medianPrices, level1Sold, level1Listed, level2Sold, level2Listed])

	return (
		<div className="median-prices">
			<div className="at-a-glance">
				<div className="title">At a Glance</div>
				<div className="description">
					{atAGlance && formatString(atAGlance, 250)}
				</div>
			</div>
			<div className="chart-container">
				<div className="section-title">
					<div>Median Prices</div>
					<div className="legend-container">
						<div className="legend">
							<div className="title">{level1Label} Median Value</div>
							<div className="row">
								<IconLine />
								Sold Properties
							</div>
							<div className="row">
								<IconListed />
								Listed Properties
							</div>
						</div>
						<div className="legend">
							<div className="title">{level2Label} Median Value</div>
							<div className="row">
								<IconLine className="green" />
								Sold Properties
							</div>
							<div className="row">
								<IconListed className="green" />
								Listed Properties
							</div>
						</div>
					</div>
				</div>
				<div className="chart" id="medianPriceChart" />
			</div>
		</div>
	)
}

export default MedianPrices
