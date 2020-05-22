import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors.js'

const PriceRelative = ({
	retail,
	level1Label,
	level1Value,
	level2Label,
	level2Value,
}: {
	retail?: boolean
	level1Label?: string | null
	level1Value?: number | null
	level2Label?: string | null
	level2Value?: number | null
}) => {
	useEffect(() => {
		const chart = am4core.create(
			`priceRelative${retail && 'Retail'}`,
			am4charts.RadarChart
		)
		chart.data = [
			{
				category: level2Label,
				value: level2Value,
				full: 100,
			},
			{
				category: level1Label,
				value: level1Value,
				full: 100,
			},
		]

		// Make chart not full circle
		chart.startAngle = -90
		chart.endAngle = 270
		chart.innerRadius = am4core.percent(30)
		chart.maskBullets = false
		chart.paddingBottom = 0
		chart.paddingTop = 0
		chart.paddingLeft = 0
		chart.paddingRight = 0

		// Set number format
		chart.numberFormatter.numberFormat = "#.#'%'"

		// Absolutely positioned level 1 value label
		let level1Valuelabel = chart.createChild(am4core.Label)
		level1Valuelabel.text = `${level1Value}%`
		level1Valuelabel.align = 'center'
		level1Valuelabel.isMeasured = false
		level1Valuelabel.x = 20
		level1Valuelabel.y = 15

		//Absolutely positioned line for level 1 value label
		let level1Line = chart.createChild(am4core.Rectangle)
		level1Line.isMeasured = false
		level1Line.width = 60
		level1Line.height = 2
		level1Line.x = 60
		level1Line.y = 25
		level1Line.fill = retail
			? am4core.color(colors.neptune)
			: am4core.color(colors.azure)

		// Absolutely positioned level 2 value labels
		let level2Valuelabel = chart.createChild(am4core.Label)
		level2Valuelabel.text = `${level2Value}%`
		level2Valuelabel.isMeasured = false
		level2Valuelabel.x = 10
		level2Valuelabel.y = 40

		//Absolutely positioned line for level 2 value label
		let level2Line = chart.createChild(am4core.Rectangle)
		level2Line.isMeasured = false
		level2Line.width = 75
		level2Line.height = 2
		level2Line.x = 45
		level2Line.y = 50
		level2Line.fill = retail
			? am4core.color(colors.neptune05)
			: am4core.color(colors.azure05)

		// Create axes
		var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis() as any)
		categoryAxis.dataFields.category = 'category'
		categoryAxis.renderer.grid.template.location = 0
		categoryAxis.renderer.grid.template.strokeOpacity = 0
		categoryAxis.renderer.labels.template.disabled = true

		var valueAxis = chart.xAxes.push(new am4charts.ValueAxis() as any)
		valueAxis.renderer.grid.template.strokeOpacity = 0
		valueAxis.renderer.labels.template.disabled = true
		valueAxis.min = 0
		valueAxis.max = 100
		valueAxis.strictMinMax = true

		// Create series
		var series1 = chart.series.push(new am4charts.RadarColumnSeries())
		series1.dataFields.valueX = 'full'
		series1.dataFields.categoryY = 'category'
		series1.clustered = false
		series1.columns.template.fillOpacity = 0.18
		series1.columns.template.strokeWidth = 0

		var series2 = chart.series.push(new am4charts.RadarColumnSeries())
		series2.dataFields.valueX = 'value'
		series2.dataFields.categoryY = 'category'
		series2.clustered = false
		series2.columns.template.strokeWidth = 0
		series2.columns.template.adapter.add('fill', (label, target): any => {
			const ctx = target?.dataItem?.dataContext as any
			if (ctx && ctx.category === level1Label) {
				return retail ? colors.neptune : colors.azure
			} else if (ctx && ctx.category === level2Label) {
				return retail ? colors.neptune05 : colors.azure05
			} else return ''
		})

		return () => {
			chart.dispose()
		}
	}, [level1Label, level1Value, level2Label, level2Value, retail])

	return (
		<div className="price-relative-container">
			<div className="sub-section-title">
				Price Relative to <br />
				{level1Label} &amp; {level2Label}
			</div>
			<div className={`chart-container ${retail && 'retail'}`}>
				<div className="legend-container">
					<div className="legend level1">
						<div className="marker level1" />
						<div className="label">{level1Label}</div>
					</div>
					<div className="legend">
						<div className="marker" />
						<div className="label">{level2Label}</div>
					</div>
				</div>
				<div id={`priceRelative${retail && 'Retail'}`} />
			</div>
		</div>
	)
}

export default PriceRelative
