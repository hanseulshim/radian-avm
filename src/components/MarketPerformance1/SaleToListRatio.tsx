import { DataContext } from 'components/App'
import React, { useEffect, useContext } from 'react'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'
import { colors } from 'styles/colors'

const SaleToListRatio = () => {
	const { saleToListRatio } = useContext(DataContext)
	const { level1Label, level2Label, data } = { ...saleToListRatio }

	useEffect(() => {
		const chart = am4core.create('saleToListChart', am4charts.XYChart)
		if (data) {
			chart.data = [...data] as any
		}

		const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
		dateAxis.baseInterval = {
			timeUnit: 'month',
			count: 1
		}
		dateAxis.renderer.minGridDistance = 10
		dateAxis.renderer.labels.template.truncate = true

		let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any)
		valueAxis.renderer.minGridDistance = 40
		valueAxis.renderer.labels.template.location = 0
		valueAxis.renderer.labels.template.adapter.add(
			'text',
			(text: string, label: any) => {
				return label.dataItem.value + 100 + '%'
			}
		)
		valueAxis.extraMax = 0.2

		let series1 = chart.series.push(new am4charts.ColumnSeries() as any)
		series1.data = chart.data.map((obj) => {
			return {
				...obj,
				level1: obj.level1 - 100
			}
		})
		series1.dataFields.valueY = 'level1'
		series1.dataFields.dateX = 'date'
		series1.columns.template.fill = am4core.color(colors.azure)
		series1.columns.template.stroke = am4core.color(colors.azure)

		let series2 = chart.series.push(new am4charts.ColumnSeries() as any)
		series2.data = chart.data.map((obj) => {
			return {
				...obj,
				level2: obj.level2 - 100
			}
		})
		series2.dataFields.valueY = 'level2'
		series2.dataFields.dateX = 'date'
		series2.columns.template.fill = am4core.color(colors.neptune)
		series2.columns.template.stroke = am4core.color(colors.neptune)
	}, [saleToListRatio])
	return (
		<div className="sale-to-list-ratio">
			<div className="section-title">
				<div>Sale to List Ratio</div>
				<div className="legend-container">
					<div className="legend">
						<div className="marker level1" />
						<div>{level1Label}</div>
					</div>
					<div className="legend">
						<div className="marker level2" />
						<div>{level2Label}</div>
					</div>
				</div>
			</div>
			<div className="chart-container" id="saleToListChart" />
		</div>
	)
}

export default SaleToListRatio
