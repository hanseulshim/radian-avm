import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors'

const IncomeOfPopulation = () => {
	const { incomeOfPopulation, incomeOfPopulationData } = useContext(DataContext)
	const { level1Label, level2Label, level3Label } = { ...incomeOfPopulation }

	useEffect(() => {
		const chart = am4core.create('incomeOfPopulationChart', am4charts.XYChart)
		chart.data = incomeOfPopulationData as any
		chart.paddingLeft = 0
		chart.paddingRight = 25

		const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
		categoryAxis.dataFields.category = 'category'
		categoryAxis.renderer.minGridDistance = 10
		categoryAxis.startLocation = 0.5
		categoryAxis.endLocation = 0.5

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		valueAxis.numberFormatter.numberFormat = '#%'
		valueAxis.renderer.labels.template.adapter.add(
			'text',
			(text: string | undefined, label: any) => {
				return label.dataItem.value + '%'
			}
		)

		const level1Series = chart.series.push(new am4charts.LineSeries())
		level1Series.dataFields.categoryX = 'category'
		level1Series.dataFields.valueY = 'level1'
		level1Series.stroke = am4core.color(colors.neptune)
		level1Series.strokeWidth = 3

		const level2Series = chart.series.push(new am4charts.LineSeries())
		level2Series.dataFields.categoryX = 'category'
		level2Series.dataFields.valueY = 'level2'
		level2Series.stroke = am4core.color(colors.azure)
		level2Series.strokeWidth = 3

		const level3Series = chart.series.push(new am4charts.LineSeries())
		level3Series.dataFields.categoryX = 'category'
		level3Series.dataFields.valueY = 'level3'
		level3Series.stroke = am4core.color(colors.black)
		level3Series.strokeWidth = 3
		level3Series.fill = am4core.color(colors.gray)
		level3Series.fillOpacity = 0.05

		return () => {
			chart.dispose()
		}
	}, [incomeOfPopulationData])
	return (
		<div className="income-of-population-container">
			<div className="section-title">
				<div>Income of Population</div>
				<div className="legend-container">
					<div className="legend">
						<div className="marker level-1" />
						<div>{level1Label}</div>
					</div>
					<div className="legend">
						<div className="marker level-2" />
						<div>{level2Label}</div>
					</div>
					<div className="legend">
						<div className="marker level-3" />
						<div>{level3Label}</div>
					</div>
				</div>
			</div>
			<div className="chart-container" id="incomeOfPopulationChart">
				Chart
			</div>
		</div>
	)
}

export default IncomeOfPopulation
