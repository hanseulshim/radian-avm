export const initialState = {
	poolName: null,
	loanNumber: null,
	orderID: null,
	valuationDate: null,
	subjectProperty: {
		propertyAddress: null,
		propertyCity: null,
		propertyState: null,
		propertyZip: null,
		yearBuilt: null,
		dwellingType: null,
		imagePath: null,
		beds: null,
		bath: null,
		sqFt: null,
		garage: null,
		lotSize: null
	},
	retail: {
		price: null,
		indicator: null,
		pricePerSqft: null,
		pricePerSqftIndicator: null,
		confidenceScore: null,
		level1Label: null,
		level1Value: null,
		level2Label: null,
		level2Value: null,
		percentSales: null
	},
	distressed: {
		price: null,
		indicator: null,
		pricePerSqft: null,
		pricePerSqftIndicator: null,
		confidenceScore: null,
		level1Label: null,
		level1Value: null,
		level2Label: null,
		level2Value: null,
		percentSales: null
	},
	footer: null
}

export interface DataInterface {
	poolName: string | null
	loanNumber: string | null
	orderID: string | null
	valuationDate: string | null
	subjectProperty: {
		propertyAddress: string | null
		propertyCity: string | null
		propertyState: string | null
		propertyZip: string | null
		yearBuilt: number | null
		dwellingType: string | null
		imagePath: string | null
		beds: number | null
		bath: number | null
		sqFt: number | null
		garage: number | null
		lotSize: number | null
	}
	retail: {
		price: number | null
		indicator: string | null
		pricePerSqft: number | null
		pricePerSqftIndicator: string | null
		confidenceScore: number | null
		level1Label: string | null
		level1Value: number | null
		level2Label: string | null
		level2Value: number | null
		percentSales: number | null
	}
	distressed: {
		price: number | null
		indicator: string | null
		pricePerSqft: number | null
		pricePerSqftIndicator: string | null
		confidenceScore: number | null
		level1Label: string | null
		level1Value: number | null
		level2Label: string | null
		level2Value: number | null
		percentSales: number | null
	}
	footer: string | null
}