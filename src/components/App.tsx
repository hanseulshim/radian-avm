import * as am4core from '@amcharts/amcharts4/core'
import { DataInterface, initialState } from 'initialState'
import React, { createContext, useEffect, useState } from 'react'
import Cover from './Cover'
import Demographics from './Demographics'
import MarketPerformance2 from './MarketPerformance2'
import MarketSummary from './MarketSummary'
import SubjectPropertyDescriptionDetails from './SubjectPropertyDescriptionDetails'

export const DataContext = createContext<DataInterface>(initialState)
am4core.options.commercialLicense = true

const App = () => {
	const [data, setData] = useState<DataInterface>(initialState)
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				process.env.REACT_APP_ENV === 'local'
					? `http://localhost:4000/dev`
					: `https://4b7f4j8t8l.execute-api.us-east-1.amazonaws.com/dev/`
			)
			const parsedResponse = await response.json()
			setData(parsedResponse)
		}

		getData()
	}, [])

	const test = process.env.REACT_APP_STAGE === 'test'

	return (
		<DataContext.Provider value={data}>
			<div className="app">
				{test ? (
					<MarketSummary />
				) : (
					<>
						<Cover />
						<SubjectPropertyDescriptionDetails />
						<MarketSummary />
						{/* <MarketPerformance1 /> */}
						<MarketPerformance2 />
						<Demographics />
					</>
				)}
			</div>
		</DataContext.Provider>
	)
}

export default App
