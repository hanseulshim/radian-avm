import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'
import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import { colors } from 'styles/colors'

const AgeOfPopulation = () => {
	const { ageOfPopulation } = useContext(DataContext)
	const { data } = { ...ageOfPopulation }

	useEffect(() => {
		const chart = am4core.create('populationByAgeChart', am4charts.XYChart)
		chart.paddingBottom = 0
		chart.paddingLeft = 10
		chart.paddingRight = 10

		chart.data = data?.map((v) => ({ ...v, valueY: 80 })) as any

		const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
		categoryAxis.dataFields.category = 'category'
		categoryAxis.startLocation = 0
		categoryAxis.endLocation = 1
		categoryAxis.renderer.minGridDistance = 10
		categoryAxis.renderer.cellStartLocation = 0.1
		categoryAxis.renderer.cellEndLocation = 0.9
		categoryAxis.renderer.grid.template.location = 0
		categoryAxis.renderer.grid.template.strokeOpacity = 0.1
		categoryAxis.renderer.grid.template.disabled = true
		categoryAxis.renderer.line.strokeOpacity = 0.1
		let tick = categoryAxis.renderer.ticks.template
		tick.disabled = false
		tick.strokeOpacity = 1
		tick.stroke = am4core.color('#495C43')
		tick.strokeWidth = 1
		tick.length = 20
		tick.dx = 12.5
		tick.dy = -20

		let label = categoryAxis.renderer.labels.template
		label.location = 0.5
		label.wrap = true
		label.maxWidth = 100
		label.rotation = -45
		label.dy = -10
		label.fontSize = 14

		const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
		valueAxis.strokeWidth = 0
		valueAxis.renderer.labels.template.disabled = true
		valueAxis.renderer.grid.template.disabled = true
		valueAxis.renderer.ticks.template.disabled = true
		valueAxis.renderer.axisFills.template.disabled = true
		valueAxis.min = 50
		valueAxis.max = 100
		valueAxis.strictMinMax = true

		const series = chart.series.push(new am4charts.ColumnSeries())
		series.dataFields.valueY = 'valueY'
		series.dataFields.value = 'value'
		series.dataFields.categoryX = 'category'
		series.columns.template.disabled = true
		series.sequencedInterpolation = true

		const bullet = series.bullets.push(new am4core.Circle())
		bullet.strokeWidth = 3
		bullet.stroke = am4core.color(colors.brandyPunch)
		bullet.fill = am4core.color(colors.brandyPunch)
		bullet.strokeOpacity = 0
		bullet.fillOpacity = 0.5
		bullet.dx = 15
		series.heatRules.push({
			property: 'radius',
			target: bullet,
			min: 5,
			max: 50
		})
		bullet.hiddenState.properties.scale = 0.01
		bullet.hiddenState.properties.opacity = 0.5
		return () => {
			chart.dispose()
		}
	}, [data])
	return (
		<div className="age-of-population-container">
			<div className="section-title">
				Age of Population
				{ageOfPopulation?.label ? ` (${ageOfPopulation?.label})` : null}
			</div>
			<div className="chart-container" id="populationByAgeChart">
				Chart
			</div>
		</div>
	)
}

export default AgeOfPopulation
