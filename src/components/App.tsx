import React, { createContext, useState, useEffect } from 'react'
import Cover from './Cover'

export interface DataInterface {
	poolName: string
	loanNumber: string
	orderID: string
	valuationDate: string
}
export const DataContext = createContext<DataInterface | null>(null)

const App = () => {
	const [data, setData] = useState<DataInterface | null>(null)
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(
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
