import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'
import AverageDom from './AverageDom'

const ListedInventory = () => {
	const { inventory, listedInventoryByDom } = useContext(DataContext)

	useEffect(() => {
		const chart = am4core.create('listedInventoryByDomChart', am4charts.XYChart)

		chart.data = listedInventoryByDom as any

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
		valueAxis.renderer.minGridDistance = 25
		valueAxis.renderer.labels.template.width = 100
		valueAxis.renderer.labels.template.maxWidth = 100
		valueAxis.renderer.labels.template.dx = -25
		valueAxis.renderer.labels.template.truncate = true
		valueAxis.renderer.labels.template.textAlign = 'end'

		const level1Series = chart.series.push(new am4charts.ColumnSeries())
		level1Series.dataFields.categoryX = 'category'
		level1Series.dataFields.valueY = 'level1'
		level1Series.columns.template.fill = am4core.color(colors.neptune)
		level1Series.columns.template.stroke = am4core.color(colors.neptune)

		const level2Series = chart.series.push(new am4charts.ColumnSeries())
		level2Series.dataFields.categoryX = 'category'
		level2Series.dataFields.valueY = 'level2'
		level2Series.columns.template.fill = am4core.color(colors.azure)
		level2Series.columns.template.stroke = am4core.color(colors.azure)

		const level3Series = chart.series.push(new am4charts.ColumnSeries())
		level3Series.dataFields.categoryX = 'category'
		level3Series.dataFields.valueY = 'level3'
		level3Series.columns.template.fill = am4core.color(colors.black)
		level3Series.columns.template.stroke = am4core.color(colors.black)

		return () => {
			chart.dispose()
		}
	}, [listedInventoryByDom])
	return (
		<div className="chart-row second">
			<div className="info-container">
				<div className="table-container">
					<div className="row header">
						<div className="first" />
						<div className="marker inventory" />
						<div className="column">Prior Month</div>
						<div className="column">1 Year Ago</div>
					</div>
					<div className="row">
						<div className="first">{inventory?.level1Label}</div>
						<div className="marker inventory level1"></div>
						<div className="column">{inventory?.level1PriorMonth}</div>
						<div className="column">{inventory?.level1PriorYear}</div>
					</div>
					<div className="row">
						<div className="first">{inventory?.level2Label}</div>
						<div className="marker inventory level2"></div>
						<div className="column">{inventory?.level2PriorMonth}</div>
						<div className="column">{inventory?.level2PriorYear}</div>
					</div>
					<div className="row">
						<div className="first">{inventory?.level3Label}</div>
						<div className="marker inventory level3"></div>
						<div className="column">{inventory?.level3PriorMonth}</div>
						<div className="column">{inventory?.level3PriorYear}</div>
					</div>
				</div>
				<div className="description">{inventory?.description}</div>
			</div>
			<div className="chart-container">
				<div className="sub-section-title">
					Listed Inventory by DOM (as of Prior Month)
				</div>
				<div className="chart inventory" id="listedInventoryByDomChart" />
				<AverageDom />
			</div>
		</div>
	)
}

export default ListedInventory
