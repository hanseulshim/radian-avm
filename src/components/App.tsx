import { DataInterface, initialState } from 'initialState'
import React, { createContext, useEffect, useState } from 'react'
import Cover from './Cover'

export const DataContext = createContext<DataInterface>(initialState)

const App = () => {
	const [data, setData] = useState<DataInterface>(initialState)
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
				// `http://localhost:4000/dev`
				`https://4b7f4j8t8l.execute-api.us-east-1.amazonaws.com/dev/`
			)
			const parsedResponse = await response.json()
			setData(parsedResponse)
		}

		getData()
	}, [])

	return (
		<DataContext.Provider value={data}>
			<div className="app">
				<Cover />
			</div>
		</DataContext.Provider>
	)
}

export default App
