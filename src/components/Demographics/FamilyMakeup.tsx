import * as am4core from '@amcharts/amcharts4/core'
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected'
import singleParent from 'assets/icon_fam_1-1.svg'
import single from 'assets/icon_fam_1.svg'
import singleChild from 'assets/icon_fam_2-1.svg'
import twoChild from 'assets/icon_fam_2-2.svg'
import couple from 'assets/icon_fam_2.svg'
import { DataContext } from 'components/App'
import React, { useContext, useEffect } from 'react'
import { colors } from 'styles/colors'

const FamilyMakeup = () => {
	const { familyMakeupDescription, familyMakeup, level1Averages } = useContext(
		DataContext
	)

	useEffect(() => {
		const chart = am4core.create(
			'familyMakeupChart',
			am4plugins_forceDirected.ForceDirectedTree
		)
		const series = chart.series.push(
			new am4plugins_forceDirected.ForceDirectedSeries()
		)

		series.data = familyMakeup as any
		series.dataFields.value = 'value'
		series.minRadius = 25
		series.maxRadius = 45

		const icon = series.nodes.template.createChild(am4core.Image)
		icon.horizontalCenter = 'middle'
		icon.verticalCenter = 'middle'
		icon.maxHeight = 60

		// Add adapter functions for dynamic icon images and sizes
		icon.adapter.add('pixelHeight', (pixelHeight, target): any => {
			const ctx = target?.dataItem?.dataContext as any
			if (ctx && ctx.value > 10) {
				return ctx.value * 1.5
			} else return 20
		})

		icon.adapter.add('href', (href, target) => {
			const ctx = target?.dataItem?.dataContext as any
			if (ctx && ctx.category) {
				switch (ctx.category) {
					case 'singles':
						return single
					case 'single parents':
						return singleParent
					case 'couples':
						return couple
					case 'one child':
						return singleChild
					case 'two children':
						return twoChild
				}
			}
		})

		// Configure circles. Fill Opacity is linked to value in data
		series.nodes.template.circle.fill = am4core.color(colors.black)
		series.nodes.template.outerCircle.disabled = true
		series.nodes.template.circle.stroke = am4core.color(colors.black)
		series.nodes.template.propertyFields.strokeOpacity = 'value'
	}, [familyMakeup])

	const getFamilyInfo = (
		familyMakeup: Array<{
			value: number | null
			category: string | null
		}> | null
	) => {
		const returnObj = {
			percent: '',
			geography: '',
			makeup: ''
		}
		if (!familyMakeup) return returnObj

		const largestMakeup = familyMakeup.sort((a, b) => {
			if (a.value === null || b.value === null) return -1
			return b.value - a.value
		})[0]
		if (largestMakeup.value) returnObj.percent = largestMakeup.value.toString()
		if (largestMakeup.category) returnObj.makeup = largestMakeup.category
		if (level1Averages?.label) returnObj.geography = level1Averages.label
		return returnObj
	}
	const info = getFamilyInfo(familyMakeup)
	return (
		<>
			<div className="section-title">Family Makeup</div>
			<div
				className="chart-container"
				id="familyMakeupChart"
				style={{ borderRadius: '50%' }}
			/>
			<div className="description">
				{familyMakeupDescription
					?.replace('{PERCENT}', info.percent)
					.replace('{GEOGRAPHY}', info.geography)
					.replace('{FAMILY_MAKEUP}', info.makeup)}
			</div>
		</>
	)
}

export default FamilyMakeup
