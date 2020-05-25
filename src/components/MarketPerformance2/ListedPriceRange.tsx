import IconActiveListings from 'assets/IconActiveListings'
import IconMedians from 'assets/IconMedians'
import { DataContext } from 'components/App'
import numeral from 'numeral'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'

const ListedPriceRange = () => {
	const { avgListingPrice, listedPriceRangeByDom } = useContext(DataContext)

	useEffect(() => {
		const chart = am4core.create('listedPriceRangeChart', am4charts.XYChart)

		chart.data = listedPriceRangeByDom as any
		chart.paddingLeft = 0
		chart.paddingRight = 0
		chart.paddingBottom = 0

		const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
		categoryAxis.dataFields.category = 'category'
		categoryAxis.startLocation = 0
		categoryAxis.endLocation = 1
		categoryAxis.renderer.minGridDistance = 10
		categoryAxis.renderer.cellStartLocation = 0.1
		categoryAxis.renderer.cellEndLocation = 0.9
		categoryAxis.renderer.grid.template.location = 0
		categoryAxis.renderer.grid.template.strokeOpacity = 0.1

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

		const level1Series = chart.series.push(new am4charts.ColumnSeries())
		level1Series.dataFields.categoryX = 'category'
		level1Series.dataFields.valueY = 'level1High'
		level1Series.dataFields.openValueY = 'level1Low'
		level1Series.columns.template.fill = am4core.color(colors.neptune)
		level1Series.columns.template.stroke = am4core.color(colors.neptune)

		const level1LineSeries = chart.series.push(new am4charts.StepLineSeries())
		level1LineSeries.dataFields.categoryX = 'category'
		level1LineSeries.dataFields.valueY = 'level1Medium'
		level1LineSeries.stroke = am4core.color(colors.neptune)
		level1LineSeries.strokeWidth = 3
		level1LineSeries.startLocation = 0.075
		level1LineSeries.endLocation = 0.385
		level1LineSeries.noRisers = true

		const level2Series = chart.series.push(new am4charts.ColumnSeries())
		level2Series.dataFields.categoryX = 'category'
		level2Series.dataFields.valueY = 'level2High'
		level2Series.dataFields.openValueY = 'level2Low'
		level2Series.columns.template.fill = am4core.color(colors.azure)
		level2Series.columns.template.stroke = am4core.color(colors.azure)

		const level2LineSeries = chart.series.push(new am4charts.StepLineSeries())
		level2LineSeries.dataFields.categoryX = 'category'
		level2LineSeries.dataFields.valueY = 'level2Medium'
		level2LineSeries.stroke = am4core.color(colors.azure)
		level2LineSeries.strokeWidth = 3
		level2LineSeries.startLocation = 0.35
		level2LineSeries.endLocation = 0.65
		level2LineSeries.noRisers = true

		const level3Series = chart.series.push(new am4charts.ColumnSeries())
		level3Series.dataFields.categoryX = 'category'
		level3Series.dataFields.valueY = 'level3High'
		level3Series.dataFields.openValueY = 'level3Low'
		level3Series.columns.template.fill = am4core.color(colors.black)
		level3Series.columns.template.stroke = am4core.color(colors.black)

		const level3LineSeries = chart.series.push(new am4charts.StepLineSeries())
		level3LineSeries.dataFields.categoryX = 'category'
		level3LineSeries.dataFields.valueY = 'level3Medium'
		level3LineSeries.stroke = am4core.color(colors.black)
		level3LineSeries.strokeWidth = 3
		level3LineSeries.startLocation = 0.62
		level3LineSeries.endLocation = 0.925
		level3LineSeries.noRisers = true

		return () => {
			chart.dispose()
		}
	}, [listedPriceRangeByDom])
	return (
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
						<div className="first">{avgListingPrice?.level1Label}</div>
						<div className="marker level1"></div>
						<div className="column">
							${numeral(avgListingPrice?.level1PriorMonth).format('0.[00]a')}
						</div>
						<div className="column">
							${numeral(avgListingPrice?.level1PriorYear).format('0.[00]a')}
						</div>
					</div>
					<div className="row">
						<div className="first">{avgListingPrice?.level2Label}</div>
						<div className="marker level2"></div>
						<div className="column">
							${numeral(avgListingPrice?.level2PriorMonth).format('0.[00]a')}
						</div>
						<div className="column">
							${numeral(avgListingPrice?.level2PriorYear).format('0.[00]a')}
						</div>
					</div>
					<div className="row">
						<div className="first">{avgListingPrice?.level3Label}</div>
						<div className="marker level3"></div>
						<div className="column">
							${numeral(avgListingPrice?.level3PriorMonth).format('0.[00]a')}
						</div>
						<div className="column">
							${numeral(avgListingPrice?.level3PriorYear).format('0.[00]a')}
						</div>
					</div>
				</div>
				<div className="description">{avgListingPrice?.description}</div>
			</div>
			<div className="chart-container">
				<div className="sub-section-title">
					<div>Listed Price Range by DOM (as of Prior Month)</div>
					<div className="legend-container">
						<div className="legend">
							<IconActiveListings />
							<div>Average listings</div>
						</div>
						<div className="legend">
							<IconMedians />
							<div>Medians</div>
						</div>
					</div>
				</div>
				<div className="chart price-range" id="listedPriceRangeChart"></div>
			</div>
		</div>
	)
}

export default ListedPriceRange
