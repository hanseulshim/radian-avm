import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors.js'

const MarketStrength = () => {
	const { marketStrength } = useContext(DataContext)

	useEffect(() => {
		const chart = am4core.create(`marketStrength`, am4charts.GaugeChart)
		chart.paddingBottom = 0
		chart.paddingTop = 25
		chart.paddingLeft = 0
		chart.paddingRight = 0

		var valueAxis = chart.xAxes.push(new am4charts.ValueAxis() as any)
		valueAxis.min = 0
		valueAxis.max = 100
		valueAxis.strictMinMax = true
		valueAxis.renderer.labels.radius = 5

		let range = valueAxis.axisRanges.create()
		range.value = -1
		range.endValue = 100
		range.axisFill.fillOpacity = 1
		range.axisFill.fill = am4core.color(colors.wildSand)
		range.axisFill.y = 10
		range.axisFill.radius = -50

		const hand = chart.hands.push(new am4charts.ClockHand())
		hand.pin.radius = 7
		hand.y = 0
		hand.startWidth = 14
		hand.stroke = am4core.color(colors.black)
		hand.fill = am4core.color(colors.black)
		hand.value = marketStrength
	}, [marketStrength])
	return (
		<div className="market-strength-container">
			<div className="section-title">Market Strength</div>
			<div className="chart-container" id="marketStrength"></div>
		</div>
	)
}

export default MarketStrength
