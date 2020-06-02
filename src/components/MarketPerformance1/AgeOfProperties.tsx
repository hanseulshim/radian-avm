import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import { colors } from 'styles/colors'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'

const AgeOfProperties = () => {
	const { ageOfProperties } = useContext(DataContext)

	useEffect(() => {
		const chart = am4core.create('ageOfPropertiesChart', am4charts.XYChart)
		chart.data = ageOfProperties as any
		chart.paddingLeft = 0
		chart.paddingRight = 0
		chart.paddingBottom = 0

		let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any)
		categoryAxis.dataFields.category = 'category'
		categoryAxis.renderer.labels.template.fontSize = 16
		categoryAxis.renderer.minGridDistance = 20
		categoryAxis.renderer.grid.template.location = 0

		let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any)
		valueAxis.renderer.minGridDistance = 50
		valueAxis.renderer.labels.template.location = 0
		valueAxis.renderer.labels.template.adapter.add(
			'text',
			(text: string, label: any) => {
				return label.dataItem.value + '%'
			}
		)
		valueAxis.extraMax = 0.2

		let series1 = chart.series.push(new am4charts.ColumnSeries() as any)
		series1.dataFields.valueY = 'level1'
		series1.dataFields.categoryX = 'category'
		series1.columns.template.fill = am4core.color(colors.azure)
		series1.columns.template.stroke = am4core.color(colors.azure)

		let series2 = chart.series.push(new am4charts.ColumnSeries() as any)
		series2.dataFields.valueY = 'level2'
		series2.dataFields.categoryX = 'category'
		series2.columns.template.fill = am4core.color(colors.neptune)
		series2.columns.template.stroke = am4core.color(colors.neptune)
	}, [ageOfProperties])
	return (
		<div className="age-of-properties">
			<div className="section-title">Age of Properties</div>
			<div className="chart-container" id="ageOfPropertiesChart">
				chart
			</div>
		</div>
	)
}

export default AgeOfProperties
