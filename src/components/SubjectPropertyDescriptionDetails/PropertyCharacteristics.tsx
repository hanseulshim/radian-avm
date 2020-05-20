import React, { useContext, useEffect } from 'react'
import IconBath from 'assets/IconBath'
import IconBed from 'assets/IconBed'
import IconCalendar from 'assets/IconCalendar'
import IconCar from 'assets/IconCar'
import IconRuler from 'assets/IconRuler'
import { DataContext } from 'components/App'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { colors } from 'styles/colors.js'

const PropertyCharacteristics = () => {
	const { propertyCharacteristics } = useContext(DataContext)
	const { source1, source2, source3, other1Value, other2Value } = {
		...propertyCharacteristics,
	}
	const charts = ['beds', 'baths', 'sqFt', 'age', 'garage']
	const data: Array<{
		label: string | null
		beds: number | null
		baths: number | null
		sqFt: number | null
		age: number | null
		garage: number | null
		bedsPercent: number | null
		bathsPercent: number | null
		sqFtPercent: number | null
		agePercent: number | null
		garagePercent: number | null
	}> = [
		{
			label: source1?.label ? source1?.label : null,
			beds: source1?.beds ? source1?.beds : null,
			baths: source1?.baths ? source1?.baths : null,
			sqFt: source1?.sqFt ? source1?.sqFt : null,
			age: source1?.age ? source1?.age : null,
			garage: source1?.garage ? source1?.garage : null,
			bedsPercent: source1?.bedsPercent ? source1?.bedsPercent : null,
			bathsPercent: source1?.bathsPercent ? source1?.bathsPercent : null,
			sqFtPercent: source1?.sqFtPercent ? source1?.sqFtPercent : null,
			agePercent: source1?.agePercent ? source1?.agePercent : null,
			garagePercent: source1?.garagePercent ? source1?.garagePercent : null,
		},
		{
			label: null,
			beds: other1Value?.beds ? other1Value?.beds : null,
			baths: other1Value?.baths ? other1Value?.baths : null,
			sqFt: null,
			age: null,
			garage: other1Value?.garage ? other1Value?.garage : null,
			bedsPercent: other1Value?.bedsPercent ? other1Value?.bedsPercent : null,
			bathsPercent: other1Value?.bathsPercent
				? other1Value?.bathsPercent
				: null,
			sqFtPercent: other1Value?.sqFtPercent ? other1Value?.sqFtPercent : null,
			agePercent: other1Value?.agePercent ? other1Value?.agePercent : null,
			garagePercent: other1Value?.garagePercent
				? other1Value?.garagePercent
				: null,
		},
		{
			label: null,
			beds: other2Value?.beds ? other2Value?.beds : null,
			baths: other2Value?.baths ? other2Value?.baths : null,
			sqFt: null,
			age: null,
			garage: other2Value?.garage ? other2Value?.garage : null,
			bedsPercent: other2Value?.bedsPercent ? other2Value?.bedsPercent : null,
			bathsPercent: other2Value?.bathsPercent
				? other2Value?.bathsPercent
				: null,
			sqFtPercent: other2Value?.sqFtPercent ? other2Value?.sqFtPercent : null,
			agePercent: other2Value?.agePercent ? other2Value?.agePercent : null,
			garagePercent: other2Value?.garagePercent
				? other2Value?.garagePercent
				: null,
		},
	]

	useEffect(() => {
		charts.map((chartId) => {
			const chart = am4core.create(chartId, am4charts.XYChart)
			chart.data = data.sort((a, b) => {
				if (a.beds === null || b.beds === null) {
					return -1
				} else return b.beds - a.beds
			})
			chart.data = [...data]

			let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis() as any)
			categoryAxis.dataFields.category = chartId
			categoryAxis.renderer.labels.template.fontSize = 12
			let valueAxis = chart.yAxes.push(new am4charts.ValueAxis() as any)
			valueAxis.renderer.minGridDistance = 20
			if (chartId === 'beds') {
				let label = valueAxis.renderer.labels.template
				label.fontSize = 12
			} else {
				valueAxis.renderer.labels.template.disabled = true
			}

			let series1 = chart.series.push(new am4charts.ColumnSeries() as any)
			series1.dataFields.valueY = chartId + 'Percent'
			series1.dataFields.categoryX = chartId
			series1.columns.template.adapter.add(
				'fill',
				(text: string, target: any): any => {
					const ctx = target?.dataItem?.dataContext as any
					if (ctx && ctx.label === 'Radian AVM') {
						return colors.black
					} else return colors.neptune05
				}
			)
			series1.columns.template.adapter.add(
				'stroke',
				(text: string, target: any): any => {
					const ctx = target?.dataItem?.dataContext as any
					if (ctx && ctx.label === 'Radian AVM') {
						return colors.black
					} else return colors.neptune05
				}
			)
		})

		// const bedsChart = am4core.create('beds', am4charts.XYChart)
		// // bedsChart.data = data.sort((a: Object, b: Object) => b.beds - a.beds)
		// bedsChart.data = [...data]

		// let categoryAxis = bedsChart.xAxes.push(new am4charts.CategoryAxis() as any)
		// categoryAxis.dataFields.category = 'beds'
		// let valueAxis = bedsChart.yAxes.push(new am4charts.ValueAxis() as any)
		// valueAxis.renderer.minGridDistance = 20
		// let label = valueAxis.renderer.labels.template
		// label.fontSize = 12

		// let series1 = bedsChart.series.push(new am4charts.ColumnSeries() as any)
		// series1.dataFields.valueY = 'bedsPercent'
		// series1.dataFields.categoryX = 'beds'
		// series1.columns.template.adapter.add(
		// 	'fill',
		// 	(text: string, target: any): any => {
		// 		const ctx = target?.dataItem?.dataContext as any
		// 		if (ctx && ctx.label === 'Radian AVM') {
		// 			return colors.black
		// 		} else return colors.neptune05
		// 	}
		// )
		// series1.columns.template.adapter.add(
		// 	'stroke',
		// 	(text: string, target: any): any => {
		// 		const ctx = target?.dataItem?.dataContext as any
		// 		if (ctx && ctx.label === 'Radian AVM') {
		// 			return colors.black
		// 		} else return colors.neptune05
		// 	}
		// )
	}, [source1, other1Value, other2Value])
	return (
		<div className="property-characteristics-container">
			<div className="section-title">
				<span>Property Characteristics</span>
				<div className="marker-container">
					<div className="marker" />
					<div>Subject Property</div>
				</div>
			</div>
			<div className="chart-container">
				{charts.map((v) => {
					return <div id={v} key={v} />
				})}
			</div>
			<div className="table-container">
				<div className="row">
					<div className="first" />
					<div className="column">
						Beds<sup>*</sup>
					</div>
					<div className="column">
						Bath<sup>*</sup>
					</div>
					<div className="column">
						SqFt<sup>*</sup>
					</div>
					<div className="column">
						Age (yrs)<sup>*</sup>
					</div>
					<div className="column">
						Garage<sup>*</sup>
					</div>
				</div>
				<div className="row icon-row">
					<div className="first">Source</div>
					<div className="column">
						<IconBed className="black" />
					</div>
					<div className="column">
						<IconBath className="black" />
					</div>
					<div className="column">
						<IconRuler className="black" />
					</div>
					<div className="column">
						<IconCalendar className="black" />
					</div>
					<div className="column">
						<IconCar className="black" />
					</div>
				</div>
				<div className="row source-1-row">
					<div className="first">{source1?.label}</div>
					<div className="column">
						<span className="value">{source1?.beds}</span>
					</div>
					<div className="column">
						<span className="value">{source1?.baths}</span>
					</div>
					<div className="column">
						<span className="value">{source1?.sqFt}</span>
					</div>
					<div className="column">
						<span className="value">{source1?.age}</span>
					</div>
					<div className="column">
						<span className="value">{source1?.garage}</span>
					</div>
				</div>
				<div className="row source-2-row">
					<div className="first">{source2?.label}</div>
					<div className="column">
						<span className="value">{source2?.beds}</span>
					</div>
					<div className="column">
						<span className="value">{source2?.baths}</span>
					</div>
					<div className="column">
						<span className="value">{source2?.sqFt}</span>
					</div>
					<div className="column">
						<span className="value">{source2?.age}</span>
					</div>
					<div className="column">
						<span className="value">{source2?.garage}</span>
					</div>
				</div>
				<div className="row source-2-row">
					<div className="first">{source3?.label}</div>
					<div className="column">
						<span className="value">{source3?.beds}</span>
					</div>
					<div className="column">
						<span className="value">{source3?.baths}</span>
					</div>
					<div className="column">
						<span className="value">{source3?.sqFt}</span>
					</div>
					<div className="column">
						<span className="value">{source3?.age}</span>
					</div>
					<div className="column">
						<span className="value">{source3?.garage}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PropertyCharacteristics
